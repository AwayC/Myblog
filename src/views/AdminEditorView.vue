<template>
  <div class="admin-editor">
    <div class="editor-header">
      <button class="btn btn-back" @click="goBack">← Dashboard</button>
      <h1>{{ isEdit ? 'Edit Post' : 'New Post' }}</h1>
      <button class="btn btn-save" @click="save" :disabled="saving">
        {{ saving ? 'Saving...' : 'Save' }}
      </button>
    </div>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="editor-layout">
      <!-- 左侧元数据 -->
      <div class="editor-meta">
        <div class="form-group">
          <label>Title</label>
          <input v-model="form.name" type="text" class="form-control" placeholder="Post title" />
        </div>

        <div class="form-group">
          <label>Page Path</label>
          <input v-model="form.pagePath" type="text" class="form-control" placeholder="e.g. my-post/content" />
          <small class="form-hint">URL slug — the .md file will be saved at public/posts/[pagePath].md</small>
        </div>

        <div class="form-group">
          <label>Summary</label>
          <textarea v-model="form.summary" class="form-control" rows="2" placeholder="Brief summary"></textarea>
        </div>

        <div class="form-group">
          <label>Tags (comma-separated)</label>
          <input
            v-model="tagsInput"
            type="text"
            class="form-control"
            placeholder="e.g. 前端, JavaScript, 心得"
            @change="updateTags"
          />
        </div>

        <div class="form-group">
          <label>Cover Image</label>
          <div class="cover-section">
            <div class="form-check">
              <input id="has_img" v-model="form.has_img" type="checkbox" class="form-check-input" />
              <label for="has_img" class="form-check-label">Has cover image</label>
            </div>
            <div v-if="form.has_img" class="cover-upload">
              <div class="cover-field-row">
                <input v-model="form.img" type="text" class="form-control" placeholder="@/posts/slug/cover.png or URL" />
                <button class="btn btn-upload" @click="triggerCoverUpload" title="Upload cover image">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </button>
                <button v-if="form.img" class="btn btn-clear-img" @click="form.img = ''" title="Clear">✕</button>
              </div>
              <input ref="coverInput" type="file" accept="image/*" class="hidden-input" @change="onCoverUpload" />
              <div v-if="form.img" class="cover-preview">
                <img :src="previewImageUrl(form.img)" alt="cover preview" />
              </div>
            </div>
          </div>
        </div>

        <!-- 图片管理 -->
        <div v-if="slug" class="image-manager">
          <label>Post Images</label>
          <div class="image-upload-row">
            <button class="btn btn-upload-sm" @click="triggerImageUpload" :disabled="uploadingImage">
              {{ uploadingImage ? 'Uploading...' : '+ Upload Image' }}
            </button>
            <input ref="imageInput" type="file" accept="image/*" class="hidden-input" @change="onImageUpload" />
          </div>
          <div v-if="postImages.length > 0" class="image-list">
            <div v-for="img in postImages" :key="img.filename" class="image-item" @click="insertImage(img.ref)" :title="'Click to insert: ' + img.ref">
              <img :src="img.url" :alt="img.filename" />
              <button class="btn-delete-img" @click.stop="deleteImage(img.filename)" title="Delete image">✕</button>
            </div>
          </div>
          <div v-else class="no-images">No images uploaded yet</div>
        </div>
      </div>

      <!-- 右侧编辑器 -->
      <div class="editor-content">
        <label>Markdown Content</label>
        <div class="editor-panes">
          <textarea
            ref="textarea"
            v-model="form.content"
            class="form-control markdown-input"
            placeholder="Write your markdown here..."
          ></textarea>
          <div class="markdown-preview">
            <div class="preview-label">Preview</div>
            <div class="markdown-body" v-html="previewHtml" @error.capture="onPreviewImgError"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';
import router from '@/router/index';

export default {
  name: 'AdminEditorView',
  data() {
    return {
      isEdit: false,
      form: {
        name: '',
        pagePath: '',
        summary: '',
        tags: [],
        has_img: false,
        img: '',
        content: '',
      },
      tagsInput: '',
      saving: false,
      error: '',
      postImages: [],
      uploadingImage: false,
    };
  },
  computed: {
    // 从 pagePath 提取目录名，如 "my-post/content" → "my-post"
    slug() {
      if (!this.form.pagePath) return '';
      return this.form.pagePath.split('/')[0];
    },
    previewHtml() {
      if (!this.form.content) return '<p style="color:#888;">Nothing to preview</p>';
      if (this.$markdown) {
        let html = this.$markdown.render(this.form.content);
        html = this.replaceImagePaths(html);
        return DOMPurify.sanitize(html);
      }
      return '';
    },
  },
  watch: {
    slug(newSlug, oldSlug) {
      if (newSlug && newSlug !== oldSlug) {
        this.fetchImages();
      }
    },
  },
  methods: {
    apiUrl(path) {
      const base = process.env.VUE_APP_API_URL || '';
      const root = base.endsWith('/api') ? base : `${base}/api`;
      return `${root}${path}`;
    },
    authHeaders() {
      return {
        Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
      };
    },
    prefixedImageUrl(imgPath) {
      // @/posts/xxx → /posts/xxx, 外部 URL 原样返回
      if (imgPath && typeof imgPath === 'string' && !imgPath.startsWith('http')) {
        return imgPath.replace(/^@\/posts\//, '/posts/');
      }
      return imgPath;
    },
    // 替换 markdown 渲染中 @/posts/ 路径为 /posts/
    replaceImagePaths(html) {
      if (!html) return html;
      // 匹配 src="@/posts/..." 和 href="@/posts/..."
      return html.replace(/(src|href)="@\/posts\//g, '$1="/posts/');
    },
    previewImageUrl(imgPath) {
      if (!imgPath) return '';
      if (typeof imgPath === 'string' && !imgPath.startsWith('http')) {
        // @/posts/xxx → /posts/xxx (前端直接访问 public 目录)
        return imgPath.replace(/^@\/posts\//, '/posts/');
      }
      return imgPath;
    },
    goBack() {
      router.push({ name: 'admin' });
    },
    updateTags() {
      this.form.tags = this.tagsInput
        .split(',')
        .map(t => t.trim())
        .filter(Boolean)
        .map(name => ({ name }));
    },

    // ---- 封面图上传 ----
    triggerCoverUpload() {
      this.$refs.coverInput.click();
    },
    async onCoverUpload(e) {
      const file = e.target.files[0];
      if (!file) return;
      const url = await this.uploadFile(file, 'cover');
      if (url) {
        this.form.img = url.ref;
      }
      e.target.value = '';
    },

    // ---- 文章图片上传 ----
    triggerImageUpload() {
      this.$refs.imageInput.click();
    },
    async onImageUpload(e) {
      const file = e.target.files[0];
      if (!file) return;
      const url = await this.uploadFile(file);
      if (url) {
        await this.fetchImages();
        this.insertImage(url.ref);
      }
      e.target.value = '';
    },

    async uploadFile(file) {
      if (!this.slug) {
        this.error = '请先填写 Page Path';
        return null;
      }
      this.uploadingImage = true;
      try {
        const formData = new FormData();
        formData.append('image', file);
        const res = await fetch(this.apiUrl(`/admin/upload/${this.slug}`), {
          method: 'POST',
          headers: { Authorization: this.authHeaders().Authorization },
          body: formData,
        });
        const data = await res.json();
        if (res.ok) {
          return data;
        } else {
          this.error = data.error || '上传失败';
          return null;
        }
      } catch (err) {
        this.error = '上传失败: ' + err.message;
        return null;
      } finally {
        this.uploadingImage = false;
      }
    },

    // ---- 图片列表 ----
    async fetchImages() {
      if (!this.slug) {
        this.postImages = [];
        return;
      }
      try {
        const res = await fetch(this.apiUrl(`/admin/images/${this.slug}`), {
          headers: this.authHeaders(),
        });
        if (res.ok) {
          this.postImages = await res.json();
        }
      } catch {
        // 静默失败
      }
    },

    async deleteImage(filename) {
      if (!confirm(`Delete ${filename}?`)) return;
      try {
        const res = await fetch(this.apiUrl(`/admin/images/${this.slug}/${filename}`), {
          method: 'DELETE',
          headers: this.authHeaders(),
        });
        if (res.ok) {
          await this.fetchImages();
        }
      } catch {
        // 静默失败
      }
    },

    insertImage(ref) {
      const mdImg = `![image](${ref})`;
      const textarea = this.$refs.textarea;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const before = this.form.content.substring(0, start);
        const after = this.form.content.substring(end);
        this.form.content = before + mdImg + after;
        this.$nextTick(() => {
          const newPos = start + mdImg.length;
          textarea.setSelectionRange(newPos, newPos);
          textarea.focus();
        });
      } else {
        this.form.content += mdImg + '\n';
      }
    },

    async loadPost(id) {
      try {
        const res = await fetch(this.apiUrl(`/posts/${id}`));
        if (!res.ok) throw new Error('文章不存在');
        const post = await res.json();
        this.form = {
          name: post.name || '',
          pagePath: post.pagePath || '',
          summary: post.summary || '',
          tags: post.tags || [],
          has_img: post.has_img || false,
          img: post.img || '',
          content: post.content || '',
        };
        this.tagsInput = this.form.tags.map(t => t.name).join(', ');
      } catch (err) {
        this.error = '加载文章失败: ' + err.message;
      }
    },
    async save() {
      this.error = '';
      if (!this.form.name || !this.form.pagePath || !this.form.content) {
        this.error = 'Title, page path, and content are required.';
        return;
      }
      this.saving = true;
      try {
        let res;
        if (this.isEdit) {
          res = await fetch(this.apiUrl(`/admin/posts/${this.$route.params.id}`), {
            method: 'PUT',
            headers: { ...this.authHeaders(), 'Content-Type': 'application/json' },
            body: JSON.stringify(this.form),
          });
        } else {
          res = await fetch(this.apiUrl('/admin/posts'), {
            method: 'POST',
            headers: { ...this.authHeaders(), 'Content-Type': 'application/json' },
            body: JSON.stringify(this.form),
          });
        }
        const data = await res.json();
        if (res.ok) {
          router.push({ name: 'admin' });
        } else {
          this.error = data.error || '保存失败';
        }
      } catch (err) {
        this.error = '网络错误: ' + err.message;
      } finally {
        this.saving = false;
      }
    },
  },
  async mounted() {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push({ name: 'admin-login' });
      return;
    }
    try {
      const res = await fetch(this.apiUrl('/admin/verify'), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        localStorage.removeItem('admin_token');
        router.push({ name: 'admin-login' });
        return;
      }
    } catch {
      // 后端没启动也不跳走
    }

    const id = this.$route.params.id;
    if (id) {
      this.isEdit = true;
      await this.loadPost(id);
    }
    if (this.slug) {
      await this.fetchImages();
    }
  },
};
</script>

<style scoped>
.admin-editor {
  padding-top: 80px;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  position: relative;
  z-index: 1;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.editor-header h1 {
  color: #9cc5e2;
  font-family: 'Orbitron', sans-serif;
  margin: 0;
  font-size: 1.4em;
}

.btn-back {
  background: transparent;
  color: #888;
  border: 1px solid #444;
  padding: 8px 16px;
  border-radius: 8px;
}

.btn-back:hover { color: #5abbc6; border-color: #5abbc6; }

.btn-save {
  background-color: #5abbc6;
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  padding: 10px 28px;
  border-radius: 8px;
}

.btn-save:hover { background-color: #4aa8b3; }
.btn-save:disabled { opacity: 0.5; }

.editor-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.editor-meta {
  width: 320px;
  flex-shrink: 0;
  max-height: calc(100vh - 180px);
  overflow-y: auto;
  padding-right: 8px;
  position: sticky;
  top: 100px;
}

.editor-content {
  flex: 1;
  min-width: 0;
  max-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 14px;
}

.form-group label,
.editor-content > label {
  display: block;
  color: #9cc5e2;
  font-size: 0.9em;
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  background-color: rgba(24, 28, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
  padding: 10px 12px;
  border-radius: 8px;
}

.form-control:focus {
  outline: none;
  border-color: #5abbc6;
  box-shadow: 0 0 0 0.2rem rgba(90, 187, 198, 0.15);
}

.form-hint { color: #666; font-size: 0.8em; margin-top: 4px; display: block; }

.form-check {
  display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
}
.form-check-label { color: #cacaca; font-size: 0.9em; }
.form-check-input { accent-color: #5abbc6; }

/* 封面上传 */
.cover-field-row {
  display: flex; gap: 6px;
}
.cover-field-row .form-control { flex: 1; }

.btn-upload {
  background-color: rgba(90, 187, 198, 0.2);
  color: #5abbc6;
  border: 1px solid rgba(90, 187, 198, 0.3);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  white-space: nowrap;
}
.btn-upload:hover { background-color: rgba(90, 187, 198, 0.4); }

.btn-clear-img {
  background: transparent;
  color: #f85149;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 6px 8px;
  cursor: pointer;
}
.btn-clear-img:hover { border-color: #f85149; }

.hidden-input { display: none; }

.cover-preview {
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
}
.cover-preview img {
  width: 100%; max-height: 120px; object-fit: cover; display: block;
}

/* 图片管理 */
.image-manager {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.image-manager > label {
  display: block;
  color: #9cc5e2;
  font-size: 0.9em;
  margin-bottom: 8px;
}

.image-upload-row { margin-bottom: 10px; }

.btn-upload-sm {
  background-color: rgba(90, 187, 198, 0.15);
  color: #5abbc6;
  border: 1px dashed rgba(90, 187, 198, 0.3);
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 0.85em;
  width: 100%;
}
.btn-upload-sm:hover { background-color: rgba(90, 187, 198, 0.3); }

.image-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}
.image-item {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}
.image-item:hover {
  border-color: #5abbc6;
  box-shadow: 0 0 8px rgba(90,187,198,0.3);
}
.image-item img {
  width: 100%; height: 60px; object-fit: cover; display: block;
}
.btn-delete-img {
  position: absolute;
  top: 2px; right: 2px;
  background: rgba(248,81,73,0.8);
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 18px; height: 18px;
  font-size: 10px;
  line-height: 1;
  cursor: pointer;
  display: none;
}
.image-item:hover .btn-delete-img { display: block; }

.no-images { color: #555; font-size: 0.85em; text-align: center; padding: 10px; }

/* 编辑器窗格 */
.editor-panes {
  display: flex;
  gap: 16px;
  flex: 1;
  min-height: 0;
}

.markdown-input {
  flex: 1;
  resize: none;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.6;
  min-height: 400px;
}

.markdown-preview {
  flex: 1;
  background-color: rgba(24, 28, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 16px;
  overflow-y: auto;
}

.preview-label {
  color: #666;
  font-size: 0.8em;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.markdown-body { color: #cacaca; line-height: 1.7; }
.markdown-body :deep(h1), .markdown-body :deep(h2), .markdown-body :deep(h3) { color: #9cc5e2; }
.markdown-body :deep(pre) { background-color: rgba(13,13,13,0.7); border-radius: 6px; padding: 12px; overflow-x: auto; position: relative; }
.markdown-body :deep(code) { background-color: rgba(116,143,166,0.2); padding: 2px 6px; border-radius: 4px; }
.markdown-body :deep(pre code) { background-color: transparent; padding: 0; }
.markdown-body :deep(img) { max-width: 100%; border-radius: 6px; }
.markdown-body :deep(blockquote) {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-left: 0.25em solid;
  background-color: rgba(24, 28, 39, 0.5);
  border-radius: 6px;
}
.markdown-body :deep(.markdown-alert) {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-left: 0.25em solid;
  background-color: rgba(24, 28, 39, 0.5);
  border-radius: 6px;
}
.markdown-body :deep(.markdown-alert-title) {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 14px;
}
.markdown-body :deep(.markdown-alert-title svg) { margin-right: 8px; }
.markdown-body :deep(.markdown-alert-note) { border-color: #1f6feb; }
.markdown-body :deep(.markdown-alert-note) .markdown-alert-title { color: #58a6ff; }
.markdown-body :deep(.markdown-alert-tip) { border-color: #238636; }
.markdown-body :deep(.markdown-alert-tip) .markdown-alert-title { color: #3fb950; }
.markdown-body :deep(.markdown-alert-important) { border-color: #8957e5; }
.markdown-body :deep(.markdown-alert-important) .markdown-alert-title { color: #a371f7; }
.markdown-body :deep(.markdown-alert-warning) { border-color: #9e6a03; }
.markdown-body :deep(.markdown-alert-warning) .markdown-alert-title { color: #d29922; }
.markdown-body :deep(.markdown-alert-caution) { border-color: #da3633; }
.markdown-body :deep(.markdown-alert-caution) .markdown-alert-title { color: #f85149; }

@media (max-width: 768px) {
  .editor-layout { flex-direction: column; }
  .editor-meta { width: 100%; max-height: none; overflow: visible; }
  .editor-panes { flex-direction: column; height: auto; }
  .markdown-input, .markdown-preview { min-height: 300px; }
}
</style>
