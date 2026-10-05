<template>
  <div class="admin-editor">
    <div class="editor-header">
      <div class="editor-eyebrow ui-eyebrow">
        <button class="btn btn-back roll-host" @click="goBack">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          <RollText text="Dashboard" />
        </button>
        <span class="editor-line"></span>
        <span class="accent">{{ isEdit ? 'Editing' : 'Drafting' }}</span>
      </div>
      <div class="editor-title-row">
        <h1>
          <span class="et-sans">{{ isEdit ? 'Edit' : 'New' }}</span>
          <span class="et-serif">post</span>
        </h1>
        <button class="btn btn-save roll-host" @click="save" :disabled="saving">
          <RollText :key="saving ? 1 : 0" :text="saving ? 'Saving...' : 'Save'" />
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12l5 5L20 7" /></svg>
        </button>
      </div>
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
        <label>Markdown Content <span class="char-count">{{ (form.content || '').length }} chars</span></label>
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
  position: relative;
  z-index: 1;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: calc(var(--nav-h) + 24px) 28px 40px;
}

.accent {
  color: var(--c-accent);
}

/* ---------- 头部 ---------- */
.editor-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
}

.editor-line {
  flex: 1;
  height: 1px;
  background: var(--c-line-strong);
}

.editor-title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0 28px;
}

.editor-title-row h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 6.4rem);
  line-height: 0.82;
  color: var(--c-ink);
}

.et-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.035em;
}

.et-serif {
  font-family: var(--f-serif);
  font-style: italic;
  color: var(--c-accent);
  margin-left: 0.15em;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-back {
  height: 34px;
  padding: 0 12px;
  background: transparent;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
  font-family: var(--f-mono);
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}

.btn-back:hover {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.btn-save {
  height: 48px;
  padding: 0 18px 0 22px;
  background: var(--c-accent);
  border: 1px solid var(--c-accent);
  color: var(--c-accent-ink);
  font-size: 0.86rem;
}

.btn-save:hover {
  background: var(--c-accent-soft);
  color: var(--c-accent-ink);
  box-shadow: 0 12px 36px var(--c-accent-glow);
}

.btn-save:disabled {
  opacity: 0.5;
}

.alert-danger {
  margin-bottom: 18px;
  padding: 10px 14px;
  border: 0;
  border-left: 2px solid #ff5a4f;
  border-radius: 0 8px 8px 0;
  background: rgba(255, 90, 79, 0.08);
  color: #ff8a80;
}

/* ---------- 布局 ---------- */
.editor-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

/* 左侧元数据：切角面板 */
.editor-meta {
  --cut: 20px;
  isolation: isolate;
  width: 330px;
  flex-shrink: 0;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  padding: 20px 20px 22px;
  position: sticky;
  top: 100px;
}

.editor-meta::before,
.editor-meta::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
}

.editor-meta::before {
  background: var(--c-line-strong);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

.editor-meta::after {
  background: rgba(17, 17, 14, 0.94);
  clip-path: polygon(1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px), calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px));
}

.editor-content {
  flex: 1;
  min-width: 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label,
.editor-content > label,
.image-manager > label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: var(--f-mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.char-count {
  color: var(--c-accent);
}

.form-control {
  min-height: 42px;
  background-color: #0d0d0b;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-size: 0.9rem;
}

.form-control::placeholder {
  color: var(--c-ink-3);
}

.form-control:focus {
  background-color: #0d0d0b;
  border-color: var(--c-accent);
  color: var(--c-ink);
  box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.12);
}

.form-hint {
  display: block;
  margin-top: 6px;
  color: var(--c-ink-3);
  font-size: 0.74rem;
  line-height: 1.4;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  padding-left: 0;
}

.form-check-input {
  float: none;
  margin: 0;
  width: 16px;
  height: 16px;
  background-color: #0d0d0b;
  border-color: var(--c-line-strong);
}

.form-check-input:checked {
  background-color: var(--c-accent);
  border-color: var(--c-accent);
}

.form-check-input:focus {
  box-shadow: 0 0 0 3px rgba(255, 128, 0, 0.2);
  border-color: var(--c-accent);
}

.form-check-label {
  color: var(--c-ink-2);
  font-size: 0.86rem;
}

.cover-field-row {
  display: flex;
  gap: 6px;
}

.cover-field-row .form-control {
  flex: 1;
}

.btn-upload,
.btn-clear-img {
  width: 42px;
  height: 42px;
  justify-content: center;
  padding: 0;
  flex-shrink: 0;
  background: transparent;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
}

.btn-upload:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
}

.btn-clear-img:hover {
  border-color: #ff5a4f;
  color: #ff8a80;
}

.hidden-input {
  display: none;
}

.cover-preview {
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--c-line-strong);
}

.cover-preview img {
  display: block;
  width: 100%;
  max-height: 160px;
  object-fit: cover;
}

/* 图片管理 */
.image-manager {
  margin-top: 6px;
  padding-top: 16px;
  border-top: 1px dashed var(--c-line-strong);
}

.image-upload-row {
  margin-bottom: 10px;
}

.btn-upload-sm {
  height: 36px;
  padding: 0 12px;
  background: transparent;
  border: 1px dashed var(--c-ink-3);
  color: var(--c-ink);
  font-size: 0.7rem;
}

.btn-upload-sm:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
}

.btn-upload-sm:disabled {
  opacity: 0.5;
}

.image-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}

.image-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid var(--c-line-strong);
  cursor: pointer;
  transition: border-color 0.25s;
}

.image-item:hover {
  border-color: var(--c-accent);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5);
  transition: filter 0.3s;
}

.image-item:hover img {
  filter: none;
}

.btn-delete-img {
  display: none;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: rgba(12, 12, 10, 0.85);
  color: #ff8a80;
  font-size: 0.7rem;
  cursor: pointer;
}

.image-item:hover .btn-delete-img {
  display: block;
}

.no-images {
  padding: 12px;
  text-align: center;
  color: var(--c-ink-3);
  font-size: 0.8rem;
  border: 1px dashed var(--c-line);
  border-radius: 8px;
}

/* ---------- 编辑 / 预览 ---------- */
.editor-panes {
  display: flex;
  gap: 0;
  height: calc(100vh - 200px);
  min-height: 520px;
  border: 1px solid var(--c-line-strong);
  border-radius: 14px;
  overflow: hidden;
}

.markdown-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  resize: none;
  border: 0;
  border-right: 1px solid var(--c-line-strong);
  border-radius: 0;
  padding: 20px 22px;
  background-color: #0a0a08;
  font-family: var(--f-mono);
  font-size: 0.86rem;
  line-height: 1.75;
  caret-color: var(--c-accent);
}

.markdown-input:focus {
  box-shadow: none;
  background-color: #0a0a08;
}

.markdown-preview {
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  padding: 20px 26px;
  background: rgba(17, 17, 14, 0.92);
}

.preview-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--c-line-strong);
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-accent);
}

.preview-label::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-accent);
  box-shadow: 0 0 8px var(--c-accent);
}

.markdown-body {
  color: var(--c-ink-2);
  line-height: 1.8;
  font-size: 0.95rem;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4) {
  color: var(--c-ink);
  font-family: var(--f-sans);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 1.4em 0 0.6em;
}

.markdown-body :deep(h2) {
  padding-top: 0.5em;
  border-top: 1px solid var(--c-line-strong);
}

.markdown-body :deep(a) {
  color: var(--c-accent);
}

.markdown-body :deep(strong) {
  color: var(--c-ink);
}

.markdown-body :deep(li::marker) {
  color: var(--c-accent);
}

.markdown-body :deep(pre) {
  background-color: #0a0a08;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  padding: 12px 14px;
  overflow-x: auto;
  position: relative;
}

.markdown-body :deep(code) {
  background-color: rgba(255, 128, 0, 0.1);
  color: var(--c-accent-soft);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--f-mono);
  font-size: 0.86em;
}

.markdown-body :deep(pre code) {
  background-color: transparent;
  color: #e6e1d6;
  padding: 0;
}

.markdown-body :deep(img) {
  max-width: 100%;
  border-radius: 8px;
}

.markdown-body :deep(blockquote) {
  margin: 1em 0;
  padding: 0.2em 0 0.2em 1em;
  border-left: 2px solid var(--c-accent);
  font-family: var(--f-serif);
  font-style: italic;
  font-size: 1.2em;
  color: var(--c-ink);
}

.markdown-body :deep(hr) {
  border: 0;
  height: 1px;
  background: var(--c-line-strong);
  opacity: 1;
}

.markdown-body :deep(.markdown-alert) {
  padding: 0.6rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--c-line-strong);
  border-left: 3px solid;
  border-radius: 4px 10px 10px 4px;
  font-family: var(--f-sans);
  font-style: normal;
  font-size: 0.95rem;
  color: var(--c-ink-2);
}

.markdown-body :deep(.markdown-alert-title) {
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  font-family: var(--f-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.markdown-body :deep(.markdown-alert-title svg) { margin-right: 8px; }
.markdown-body :deep(.markdown-alert-note) { border-left-color: #4c8dff; }
.markdown-body :deep(.markdown-alert-note .markdown-alert-title) { color: #79a8ff; }
.markdown-body :deep(.markdown-alert-tip) { border-left-color: #3fb950; }
.markdown-body :deep(.markdown-alert-tip .markdown-alert-title) { color: #5fd471; }
.markdown-body :deep(.markdown-alert-important) { border-left-color: var(--c-accent); }
.markdown-body :deep(.markdown-alert-important .markdown-alert-title) { color: var(--c-accent); }
.markdown-body :deep(.markdown-alert-warning) { border-left-color: #d29922; }
.markdown-body :deep(.markdown-alert-warning .markdown-alert-title) { color: #e3b341; }
.markdown-body :deep(.markdown-alert-caution) { border-left-color: #f85149; }
.markdown-body :deep(.markdown-alert-caution .markdown-alert-title) { color: #ff7b72; }

@media (max-width: 900px) {
  .admin-editor {
    padding: calc(var(--nav-h) + 10px) 16px 32px;
  }

  .editor-layout {
    flex-direction: column;
  }

  .editor-meta {
    position: relative;
    top: 0;
    width: 100%;
    max-height: none;
    overflow: visible;
  }

  .editor-panes {
    flex-direction: column;
    height: auto;
  }

  .markdown-input {
    border-right: 0;
    border-bottom: 1px solid var(--c-line-strong);
  }

  .markdown-input,
  .markdown-preview {
    min-height: 320px;
  }
}
</style>
