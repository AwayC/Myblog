require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const envAllowedOrigins = process.env.ALLOWED_ORIGINS || '';
const allowedOrigins = envAllowedOrigins.split(',').map(item => item.trim());

// Always allow common dev ports in non-production
const isProduction = process.env.NODE_ENV === 'production';
const defaultDevOrigins = ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:3000'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const isAllowed = allowedOrigins.includes(origin);
        const isDevAllowed = !isProduction && defaultDevOrigins.includes(origin);

        if (isAllowed || isDevAllowed) {
            callback(null, true);
        } else {
            console.warn(`Blocked by CORS: origin ${origin} is not in allowed list.`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

let db;

(async () => {
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
    } catch (err) {
        console.error('Failed to initialize database:', err);
    }
})();

// 获取所有文章统计信息
app.get('/api/stats', async (req, res) => {
    if (!db) return res.status(503).json({ error: "Database not ready" });
    try {
        const stats = await db.all('SELECT * FROM post_stats');
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 获取单篇文章统计信息
app.get('/api/stats/:id', async (req, res) => {
    if (!db) return res.status(503).json({ error: "Database not ready" });
    const { id } = req.params;
    try {
        const stats = await db.get('SELECT * FROM post_stats WHERE post_id = ?', [id]);
        res.json(stats || { post_id: parseInt(id), views: 0 });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 增加文章阅读量
app.post('/api/view/:id', async (req, res) => {
    const { id } = req.params;
    if (!db) {
        return res.status(503).json({ error: "Database not ready" });
    }
    try {
        await db.run(
            'INSERT INTO post_stats (post_id, views) VALUES (?, 1) ON CONFLICT(post_id) DO UPDATE SET views = views + 1',
            [id]
        );
        const post = await db.get('SELECT views FROM post_stats WHERE post_id = ?', [id]);
        res.json(post || { views: 1 });
    } catch (err) {
        console.error("Database error on POST:", err.message);
        res.status(500).json({ error: "Internal database error" });
    }
});

// 处理所有未匹配路径，返回 JSON 而不是 HTML
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
