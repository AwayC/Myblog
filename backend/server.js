require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');
const fs = require('fs');
const { writeAtomic, readJson, writeJsonAtomic, safeDelete } = require('./atomic');

const app = express();
const port = process.env.PORT || 3000;

// ---- 路径常量 ----
const PROJECT_DIR = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(PROJECT_DIR, 'public', 'posts');
const LIST_JSON = path.join(POSTS_DIR, 'list.json');
const TAGMAP_JSON = path.join(PROJECT_DIR, 'public', 'tags', 'tagmap.json');
const ADMIN_JSON = path.join(__dirname, 'admin.json');
const BLOGROLL_JSON = path.join(PROJECT_DIR, 'public', 'blogroll', 'blogroll.json');
const PROFILE_JSON = path.join(PROJECT_DIR, 'public', 'profile.json');
const JWT_SECRET = process.env.JWT_SECRET || 'myblog-secret-key-change-me';

// ---- CORS ----
const envAllowedOrigins = process.env.ALLOWED_ORIGINS || '';
const allowedOrigins = envAllowedOrigins.split(',').map(item => item.trim());
const isProduction = process.env.NODE_ENV === 'production';
const defaultDevOrigins = ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:3000'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        if (!isProduction && defaultDevOrigins.includes(origin)) return callback(null, true);
        console.warn(`Blocked by CORS: origin ${origin}`);
        callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ---- 图片上传配置 ----
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        // 上传到文章 slug 对应的目录，比如 public/posts/my-post/
        const slug = req.params.slug || 'common';
        const dir = path.join(POSTS_DIR, slug);
        await fs.promises.mkdir(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        // 保留中文原名，过滤掉危险字符
        const safeName = file.originalname
            .replace(/[\\/:*?"<>|]/g, '_')
            .replace(/\s+/g, '_');
        cb(null, safeName);
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

let db;

// ==================== 鉴权中间件 ====================

function adminAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: '未登录' });
    }
    const token = authHeader.slice(7);
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.admin = payload;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token 无效或已过期' });
    }
}

// ==================== 公开 API ====================

// 文章列表（按 id 降序，最新的在前）
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await readJson(LIST_JSON);
        posts.sort((a, b) => b.id - a.id);
        res.json(posts);
    } catch (err) {
        console.error('读取文章列表失败:', err.message);
        res.status(500).json({ error: '读取文章列表失败' });
    }
});

// 单篇文章（元数据 + markdown 内容）
app.get('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readJson(LIST_JSON);
        const post = posts.find(p => p.id === Number(req.params.id));
        if (!post) {
            return res.status(404).json({ error: '文章不存在' });
        }
        const mdPath = path.join(POSTS_DIR, post.pagePath + '.md');
        let content = '';
        try {
            content = await fs.promises.readFile(mdPath, 'utf-8');
        } catch {
            content = '';
        }
        res.json({ ...post, content });
    } catch (err) {
        console.error('读取文章失败:', err.message);
        res.status(500).json({ error: '读取文章失败' });
    }
});

// 标签映射
app.get('/api/tags', async (req, res) => {
    try {
        const tags = await readJson(TAGMAP_JSON);
        res.json(tags);
    } catch (err) {
        res.status(500).json({ error: '读取标签失败' });
    }
});

// 阅读量统计（保留现有功能）
app.get('/api/stats', async (req, res) => {
    if (!db) return res.status(503).json({ error: "Database not ready" });
    try {
        const stats = await db.all('SELECT * FROM post_stats');
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/stats/:id', async (req, res) => {
    if (!db) return res.status(503).json({ error: "Database not ready" });
    try {
        const stats = await db.get('SELECT * FROM post_stats WHERE post_id = ?', [req.params.id]);
        res.json(stats || { post_id: parseInt(req.params.id), views: 0 });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/view/:id', async (req, res) => {
    const { id } = req.params;
    if (!db) return res.status(503).json({ error: "Database not ready" });
    try {
        await db.run(
            'INSERT INTO post_stats (post_id, views) VALUES (?, 1) ON CONFLICT(post_id) DO UPDATE SET views = views + 1',
            [id]
        );
        const post = await db.get('SELECT views FROM post_stats WHERE post_id = ?', [id]);
        res.json(post || { views: 1 });
    } catch (err) {
        console.error("Database error:", err.message);
        res.status(500).json({ error: "Internal database error" });
    }
});

// ==================== Admin API ====================

// 登录
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: '请输入用户名和密码' });
    }
    try {
        const admin = await readJson(ADMIN_JSON);
        if (username === admin.username && password === admin.password) {
            const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });
            res.json({ token, username: admin.username });
        } else {
            res.status(401).json({ error: '用户名或密码错误' });
        }
    } catch (err) {
        console.error('登录失败:', err.message);
        res.status(500).json({ error: '登录失败' });
    }
});

// 验证 token 有效性
app.get('/api/admin/verify', adminAuth, (req, res) => {
    res.json({ valid: true, username: req.admin.username });
});

// 新建文章
app.post('/api/admin/posts', adminAuth, async (req, res) => {
    try {
        const { name, summary, tags, has_img, img, pagePath, content } = req.body;
        if (!name || !pagePath || !content) {
            return res.status(400).json({ error: '标题、路径和内容不能为空' });
        }

        // 读取现有列表
        const posts = await readJson(LIST_JSON);

        // 生成新 ID
        const maxId = posts.reduce((max, p) => Math.max(max, p.id), 0);
        const newPost = {
            id: maxId + 1,
            name,
            summary: summary || '',
            tags: tags || [],
            has_img: !!has_img,
            img: img || '',
            pagePath,
            time: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };

        // 原子写 .md 文件
        const mdPath = path.join(POSTS_DIR, pagePath + '.md');
        await writeAtomic(mdPath, content);

        // 原子写 list.json
        posts.push(newPost);
        await writeJsonAtomic(LIST_JSON, posts);

        console.log(`文章已创建: ${name} (id: ${newPost.id})`);
        res.json(newPost);
    } catch (err) {
        console.error('创建文章失败:', err.message);
        res.status(500).json({ error: '创建文章失败: ' + err.message });
    }
});

// 更新文章
app.put('/api/admin/posts/:id', adminAuth, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, summary, tags, has_img, img, pagePath, content } = req.body;

        const posts = await readJson(LIST_JSON);
        const index = posts.findIndex(p => p.id === id);
        if (index === -1) {
            return res.status(404).json({ error: '文章不存在' });
        }

        const oldPost = posts[index];

        // 更新元数据
        const updatedPost = {
            ...oldPost,
            name: name !== undefined ? name : oldPost.name,
            summary: summary !== undefined ? summary : oldPost.summary,
            tags: tags !== undefined ? tags : oldPost.tags,
            has_img: has_img !== undefined ? !!has_img : oldPost.has_img,
            img: img !== undefined ? img : oldPost.img,
            pagePath: pagePath !== undefined ? pagePath : oldPost.pagePath,
        };
        posts[index] = updatedPost;

        // 更新 .md 文件
        if (content !== undefined) {
            const mdPath = path.join(POSTS_DIR, updatedPost.pagePath + '.md');
            await writeAtomic(mdPath, content);
        }

        // 如果 pagePath 变了，删除旧文件
        if (pagePath !== undefined && pagePath !== oldPost.pagePath) {
            const oldMdPath = path.join(POSTS_DIR, oldPost.pagePath + '.md');
            await safeDelete(oldMdPath);
        }

        // 原子写 list.json
        await writeJsonAtomic(LIST_JSON, posts);

        console.log(`文章已更新: ${updatedPost.name} (id: ${id})`);
        res.json(updatedPost);
    } catch (err) {
        console.error('更新文章失败:', err.message);
        res.status(500).json({ error: '更新文章失败: ' + err.message });
    }
});

// 删除文章
app.delete('/api/admin/posts/:id', adminAuth, async (req, res) => {
    try {
        const id = Number(req.params.id);

        const posts = await readJson(LIST_JSON);
        const index = posts.findIndex(p => p.id === id);
        if (index === -1) {
            return res.status(404).json({ error: '文章不存在' });
        }

        const removed = posts[index];
        posts.splice(index, 1);

        // 删除 .md 文件
        const mdPath = path.join(POSTS_DIR, removed.pagePath + '.md');
        await safeDelete(mdPath);

        // 原子写 list.json
        await writeJsonAtomic(LIST_JSON, posts);

        console.log(`文章已删除: ${removed.name} (id: ${id})`);
        res.json({ success: true });
    } catch (err) {
        console.error('删除文章失败:', err.message);
        res.status(500).json({ error: '删除文章失败: ' + err.message });
    }
});

// 更新 tags
app.put('/api/admin/tags', adminAuth, async (req, res) => {
    try {
        await writeJsonAtomic(TAGMAP_JSON, req.body);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: '更新标签失败: ' + err.message });
    }
});

// 上传图片到指定文章目录
// POST /api/admin/upload/:slug  — slug 是文章目录名，如 "my-post"
app.post('/api/admin/upload/:slug', adminAuth, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: '请选择图片文件' });
    }
    const slug = req.params.slug;
    const filename = req.file.filename;
    // 返回引用路径：@/posts/[slug]/[filename]
    const refPath = `@/posts/${slug}/${filename}`;
    // 也返回浏览器可访问的 URL：/posts/[slug]/[filename]
    const urlPath = `/posts/${slug}/${filename}`;
    console.log(`图片已上传: ${refPath}`);
    res.json({ ref: refPath, url: urlPath, filename, slug });
});

// 列出文章目录下的图片
app.get('/api/admin/images/:slug', adminAuth, async (req, res) => {
    try {
        const slug = req.params.slug;
        const dir = path.join(POSTS_DIR, slug);
        let files = [];
        try {
            files = await fs.promises.readdir(dir);
        } catch {
            // 目录不存在，返回空列表
        }
        // 只返回图片文件
        const imageExts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp']);
        const images = files
            .filter(f => imageExts.has(path.extname(f).toLowerCase()))
            .map(f => ({
                filename: f,
                ref: `@/posts/${slug}/${f}`,
                url: `/posts/${slug}/${f}`
            }));
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: '获取图片列表失败' });
    }
});

// 删除图片
app.delete('/api/admin/images/:slug/:filename', adminAuth, async (req, res) => {
    try {
        const { slug, filename } = req.params;
        const filePath = path.join(POSTS_DIR, slug, filename);
        await safeDelete(filePath);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: '删除图片失败' });
    }
});

// 个人名片
app.get('/api/profile', async (req, res) => {
    try {
        const profile = await readJson(PROFILE_JSON);
        res.json(profile);
    } catch {
        res.json({ name: '', mottos: [], github: '', bilibili: { uid: '', text: '' } });
    }
});

app.put('/api/admin/profile', adminAuth, async (req, res) => {
    try {
        await writeJsonAtomic(PROFILE_JSON, req.body);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: '更新名片失败: ' + err.message });
    }
});

// Blogroll
app.get('/api/blogroll', async (req, res) => {
    try {
        const blogroll = await readJson(BLOGROLL_JSON);
        res.json(blogroll);
    } catch {
        res.json([]);
    }
});

app.put('/api/admin/blogroll', adminAuth, async (req, res) => {
    try {
        await writeJsonAtomic(BLOGROLL_JSON, req.body);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: '更新友链失败: ' + err.message });
    }
});

// 404
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

// ==================== 启动 ====================

const startServer = async () => {
    try {
        db = await open({
            filename: path.join(__dirname, 'database.db'),
            driver: sqlite3.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS post_stats (
                post_id INTEGER PRIMARY KEY,
                views INTEGER DEFAULT 0
            )
        `);
        console.log('Database initialized');

        app.listen(port, () => {
            console.log(`Backend server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();
