<template>
  <div class="admin-dashboard">
    <div class="dashboard-header">
      <h1>Admin Dashboard</h1>
      <div class="header-actions">
        <span class="user-info">{{ username }}</span>
        <button class="btn btn-new" @click="createPost">+ New Post</button>
        <button class="btn btn-settings" @click="toggleSettings">{{ showSettings ? 'Hide Settings' : 'Settings' }}</button>
        <button class="btn btn-logout" @click="logout">Logout</button>
      </div>
    </div>

    <div class="posts-table-wrapper">
      <div v-if="postsLoading" class="loading-state">
        <div class="spinner"></div>
        <span>Loading posts...</span>
      </div>
      <table class="posts-table" v-else-if="posts.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Tags</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>
              <span v-if="post.has_img">🖼 </span>
              {{ post.name }}
            </td>
            <td>
              <span
                class="tag-pill"
                v-for="tag in post.tags"
                :key="tag.name"
                :style="{
                  backgroundColor: (tags[tag.name] || tags.default || '#e0e0e0') + '33',
                  color: tags[tag.name] || tags.default || '#e0e0e0'
                }"
              >{{ tag.name }}</span>
            </td>
            <td>{{ post.time }}</td>
            <td class="actions">
              <button class="btn btn-sm btn-edit" @click="editPost(post.id)">Edit</button>
              <button class="btn btn-sm btn-delete" @click="confirmDelete(post)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-state">No posts yet. Click "+ New Post" to create one.</div>
    </div>

    <!-- Settings dialog -->
    <div v-if="showSettings" class="settings-overlay" @click.self="showSettings = false">
      <div class="settings-dialog">
        <div class="section-tabs">
          <button
            class="tab-btn"
            :class="{ active: settingsTab === 'profile' }"
            @click="switchSettingsTab('profile')"
          >Profile</button>
          <button
            class="tab-btn"
            :class="{ active: settingsTab === 'blogroll' }"
            @click="switchSettingsTab('blogroll')"
          >Blogroll</button>
          <button
            class="tab-btn"
            :class="{ active: settingsTab === 'tags' }"
            @click="switchSettingsTab('tags')"
          >Tags</button>
          <button class="tab-btn tab-close" @click="showSettings = false">✕</button>
        </div>

        <!-- Profile settings -->
        <div v-if="settingsTab === 'profile'" class="settings-panel">
          <div v-if="profileLoading" class="loading-state">
            <div class="spinner"></div>
            <span>Loading profile...</span>
          </div>
          <template v-else>
          <div class="form-group">
            <label>Display Name</label>
            <input v-model="profile.name" type="text" class="form-control" placeholder="AWAY" />
          </div>
          <div class="form-group">
            <label>Mottos (one per line)</label>
            <textarea v-model="profileMottosText" class="form-control" rows="3" placeholder="长风破浪，一往无前"></textarea>
          </div>
          <div class="form-group">
            <label>GitHub Username</label>
            <input v-model="profile.github" type="text" class="form-control" placeholder="AwayC" />
          </div>
          <div class="form-group">
            <label>Bilibili UID</label>
            <div class="input-row">
              <input v-model="profile.bilibili.uid" type="text" class="form-control" placeholder="470833519" />
              <span class="inline-hint">Space URL: https://space.bilibili.com/</span>
            </div>
          </div>
          <div class="form-group">
            <label>Bilibili Display Text</label>
            <input v-model="profile.bilibili.text" type="text" class="form-control" placeholder="Away真的逊了" />
          </div>
          <button class="btn btn-save-settings" @click="saveProfile" :disabled="savingProfile">
            {{ savingProfile ? 'Saving...' : 'Save Profile' }}
          </button>
          <span v-if="profileMsg" class="save-msg">{{ profileMsg }}</span>
          </template>
        </div>

        <!-- Blogroll settings -->
        <div v-if="settingsTab === 'blogroll'" class="settings-panel">
          <div v-if="blogrollLoading" class="loading-state">
            <div class="spinner"></div>
            <span>Loading blogroll...</span>
          </div>
          <template v-else>
          <div class="blogroll-list">
            <div v-for="(b, i) in blogroll" :key="i" class="blogroll-item">
              <input v-model="b.name" class="form-control" placeholder="Name" />
              <input v-model="b.link" class="form-control" placeholder="https://..." />
              <button class="btn btn-delete-sm" @click="removeBlogroll(i)">✕</button>
            </div>
          </div>
          <button class="btn btn-add-sm" @click="addBlogroll">+ Add</button>
          <button class="btn btn-save-settings" @click="saveBlogroll" :disabled="savingBlogroll" style="margin-left: 12px;">
            {{ savingBlogroll ? 'Saving...' : 'Save Blogroll' }}
          </button>
          <span v-if="blogrollMsg" class="save-msg">{{ blogrollMsg }}</span>
          </template>
        </div>

        <!-- Tags settings -->
        <div v-if="settingsTab === 'tags'" class="settings-panel">
          <div v-if="tagsLoading" class="loading-state">
            <div class="spinner"></div>
            <span>Loading tags...</span>
          </div>
          <template v-else>
          <div class="tags-list">
            <div v-for="(color, name) in editableTags" :key="name" class="tag-item">
              <div class="tag-item-preview">
                <span class="tag-pill tag-pill-editable" :style="{ backgroundColor: color + '33', color: color }">{{ name }}</span>
              </div>
              <div class="tag-color-row">
                <input type="color" v-model="editableTags[name]" class="color-picker" />
                <input
                  type="text"
                  v-model="editableTags[name]"
                  class="color-hex-input"
                  maxlength="7"
                  placeholder="#000000"
                />
              </div>
              <button class="btn btn-delete-sm" @click="removeTag(name)" title="Delete tag">✕</button>
            </div>
          </div>
          <div v-if="Object.keys(editableTags).length === 0" class="empty-tags-hint">
            No tags configured. Add one below.
          </div>
          <div class="add-tag-row">
            <input v-model="newTagName" class="form-control" placeholder="New tag name" @keyup.enter="addTag" />
            <input type="color" v-model="newTagColor" class="color-picker" />
            <button class="btn btn-add-sm" @click="addTag" :disabled="!newTagName.trim()">+ Add</button>
          </div>
          <button class="btn btn-save-settings" @click="saveTags" :disabled="savingTags">
            {{ savingTags ? 'Saving...' : 'Save Tags' }}
          </button>
          <span v-if="tagsMsg" class="save-msg">{{ tagsMsg }}</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Delete confirm modal -->
    <div v-if="deleteTarget" class="modal-overlay" @click.self="deleteTarget = null">
      <div class="modal-dialog">
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete <strong>"{{ deleteTarget.name }}"</strong>?</p>
        <p class="text-warning">This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-cancel" @click="deleteTarget = null">Cancel</button>
          <button class="btn btn-delete-confirm" @click="doDelete" :disabled="deleting">
            {{ deleting ? 'Deleting...' : 'Delete' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router/index';

export default {
  name: 'AdminDashboardView',
  data() {
    return {
      posts: [],
      postsLoading: true,
      username: '',
      deleteTarget: null,
      deleting: false,
      // Settings
      showSettings: false,
      settingsTab: 'profile',
      profileLoading: false,
      blogrollLoading: false,
      tagsLoading: false,
      profile: {
        name: '',
        mottos: [],
        github: '',
        bilibili: { uid: '', text: '' },
      },
      profileMottosText: '',
      blogroll: [],
      savingProfile: false,
      savingBlogroll: false,
      profileMsg: '',
      blogrollMsg: '',
      // Search / filter
      searchQuery: '',
      tagFilter: '',
      // Tags management
      tags: {},
      editableTags: {},
      newTagName: '',
      newTagColor: '#5abbc6',
      savingTags: false,
      tagsMsg: '',
    };
  },
  computed: {
    filteredPosts() {
      let result = this.posts;
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.trim().toLowerCase();
        result = result.filter(p => p.name.toLowerCase().includes(q));
      }
      if (this.tagFilter) {
        result = result.filter(p =>
          p.tags && p.tags.some(t => t.name === this.tagFilter)
        );
      }
      return result;
    },
    availableTags() {
      const result = {};
      for (const [name, color] of Object.entries(this.tags)) {
        if (name !== 'default') result[name] = color;
      }
      return result;
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
    authHeadersJson() {
      return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('admin_token')}`,
      };
    },
    async fetchPosts() {
      this.postsLoading = true;
      try {
        const res = await fetch(this.apiUrl('/posts'));
        if (res.ok) {
          const posts = await res.json();
          // 按 id 降序排列（id 越大越新）
          this.posts = posts.sort((a, b) => b.id - a.id);
        }
      } catch (err) {
        console.error('加载文章失败:', err);
      } finally {
        this.postsLoading = false;
      }
    },
    createPost() {
      router.push({ name: 'admin-editor-new' });
    },
    editPost(id) {
      router.push({ name: 'admin-editor-edit', params: { id } });
    },
    confirmDelete(post) {
      this.deleteTarget = post;
    },
    async doDelete() {
      this.deleting = true;
      try {
        const res = await fetch(this.apiUrl(`/admin/posts/${this.deleteTarget.id}`), {
          method: 'DELETE',
          headers: this.authHeaders(),
        });
        if (res.ok) {
          this.posts = this.posts.filter(p => p.id !== this.deleteTarget.id);
          this.deleteTarget = null;
        } else {
          const data = await res.json();
          alert(data.error || '删除失败');
        }
      } catch (err) {
        alert('网络错误');
      } finally {
        this.deleting = false;
      }
    },
    logout() {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_username');
      router.push({ name: 'admin-login' });
    },

    // ---- Search ----
    clearSearch() {
      this.searchQuery = '';
      this.tagFilter = '';
    },

    // ---- Settings ----
    toggleSettings() {
      this.showSettings = !this.showSettings;
      if (this.showSettings) {
        if (this.settingsTab === 'profile') this.loadProfile();
        if (this.settingsTab === 'blogroll') this.loadBlogroll();
        if (this.settingsTab === 'tags') this.loadTagsForEdit();
      }
    },
    switchSettingsTab(tab) {
      this.settingsTab = tab;
      if (tab === 'profile') this.loadProfile();
      if (tab === 'blogroll') this.loadBlogroll();
      if (tab === 'tags') this.loadTagsForEdit();
    },
    async loadProfile() {
      this.profileLoading = true;
      try {
        const res = await fetch(this.apiUrl('/profile'));
        if (res.ok) {
          const data = await res.json();
          this.profile = {
            name: data.name || '',
            mottos: data.mottos || [],
            github: data.github || '',
            bilibili: { uid: data.bilibili?.uid || '', text: data.bilibili?.text || '' },
          };
          this.profileMottosText = this.profile.mottos.join('\n');
        }
      } catch { /* 静默 */ } finally {
        this.profileLoading = false;
      }
    },
    async saveProfile() {
      this.savingProfile = true;
      this.profileMsg = '';
      this.profile.mottos = this.profileMottosText.split('\n').map(s => s.trim()).filter(Boolean);
      try {
        const res = await fetch(this.apiUrl('/admin/profile'), {
          method: 'PUT',
          headers: this.authHeadersJson(),
          body: JSON.stringify(this.profile),
        });
        if (res.ok) {
          this.profileMsg = 'Saved!';
        } else {
          const data = await res.json();
          this.profileMsg = data.error || 'Failed';
        }
      } catch {
        this.profileMsg = 'Network error';
      } finally {
        this.savingProfile = false;
      }
    },
    async loadBlogroll() {
      this.blogrollLoading = true;
      try {
        const res = await fetch(this.apiUrl('/blogroll'));
        if (res.ok) this.blogroll = await res.json();
      } catch { /* 静默 */ } finally {
        this.blogrollLoading = false;
      }
    },
    addBlogroll() {
      this.blogroll.push({ name: '', link: '' });
    },
    removeBlogroll(i) {
      this.blogroll.splice(i, 1);
    },
    async saveBlogroll() {
      this.savingBlogroll = true;
      this.blogrollMsg = '';
      try {
        const res = await fetch(this.apiUrl('/admin/blogroll'), {
          method: 'PUT',
          headers: this.authHeadersJson(),
          body: JSON.stringify(this.blogroll.filter(b => b.name && b.link)),
        });
        if (res.ok) {
          this.blogrollMsg = 'Saved!';
        } else {
          const data = await res.json();
          this.blogrollMsg = data.error || 'Failed';
        }
      } catch {
        this.blogrollMsg = 'Network error';
      } finally {
        this.savingBlogroll = false;
      }
    },

    // ---- Tags ----
    async loadTags() {
      this.tagsLoading = true;
      try {
        const res = await fetch(this.apiUrl('/tags'));
        if (res.ok) this.tags = await res.json();
      } catch { /* silent */ } finally {
        this.tagsLoading = false;
      }
    },
    async loadTagsForEdit() {
      await this.loadTags();
      this.initEditableTags();
    },
    initEditableTags() {
      const { default: _default, ...rest } = this.tags;
      void _default;
      this.editableTags = { ...rest };
    },
    addTag() {
      const name = this.newTagName.trim();
      if (!name) return;
      if (Object.prototype.hasOwnProperty.call(this.editableTags, name)) {
        this.tagsMsg = 'Tag already exists';
        return;
      }
      this.editableTags[name] = this.newTagColor;
      this.newTagName = '';
      this.newTagColor = '#5abbc6';
      this.tagsMsg = '';
    },
    removeTag(name) {
      delete this.editableTags[name];
    },
    async saveTags() {
      this.savingTags = true;
      this.tagsMsg = '';
      try {
        const body = { ...this.editableTags, default: this.tags.default || '#e0e0e0' };
        const res = await fetch(this.apiUrl('/admin/tags'), {
          method: 'PUT',
          headers: this.authHeadersJson(),
          body: JSON.stringify(body),
        });
        if (res.ok) {
          this.tags = { ...body };
          this.tagsMsg = 'Saved!';
        } else {
          const data = await res.json();
          this.tagsMsg = data.error || 'Failed';
        }
      } catch {
        this.tagsMsg = 'Network error';
      } finally {
        this.savingTags = false;
      }
    },
  },
  async mounted() {
    this.username = localStorage.getItem('admin_username') || 'admin';

    // 验证 token
    try {
      const res = await fetch(this.apiUrl('/admin/verify'), {
        headers: this.authHeaders(),
      });
      if (!res.ok) {
        this.logout();
        return;
      }
    } catch {
      // 后端没启动也不跳走
    }

    await this.fetchPosts();
    this.loadTags();
    this.loadProfile();
  },
};
</script>

<style scoped>
.admin-dashboard {
  padding-top: 80px;
  min-height: 100vh;
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  z-index: 1;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}

.dashboard-header h1 {
  color: #9cc5e2;
  font-family: 'Orbitron', sans-serif;
  margin: 0;
  margin-right: auto;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info {
  color: #888;
  margin-right: 4px;
  font-size: 0.85em;
}

.btn-new {
  background-color: #5abbc6;
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85em;
  transition: all 0.3s;
}

.btn-new:hover {
  background-color: #4aa8b3;
}

.btn-settings {
  background-color: transparent;
  color: #888;
  border: 1px solid #555;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85em;
  transition: all 0.3s;
}

.btn-settings:hover {
  color: #5abbc6;
  border-color: #5abbc6;
}

.btn-logout {
  background-color: transparent;
  color: #888;
  border: 1px solid #555;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85em;
  transition: all 0.3s;
}

.btn-logout:hover {
  color: #f85149;
  border-color: #f85149;
}

.posts-table-wrapper {
  background-color: rgba(37, 45, 56, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #888;
  font-size: 0.9em;
  gap: 12px;
}

.loading-state .spinner {
  width: 32px;
  height: 32px;
  border: 3px solid rgba(90, 187, 198, 0.2);
  border-top-color: #5abbc6;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.posts-table {
  width: 100%;
  border-collapse: collapse;
}

.posts-table th {
  color: #9cc5e2;
  text-align: left;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9em;
}

.posts-table td {
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #cacaca;
}

.posts-table tr:hover td {
  background-color: rgba(90, 187, 198, 0.05);
}

.tag-pill {
  display: inline-block;
  background-color: rgba(90, 187, 198, 0.2);
  color: #5abbc6;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-right: 4px;
}

.actions {
  white-space: nowrap;
}

.btn-sm {
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85em;
  border: none;
  cursor: pointer;
  margin-right: 6px;
  transition: all 0.2s;
}

.btn-edit {
  background-color: rgba(90, 187, 198, 0.2);
  color: #5abbc6;
}

.btn-edit:hover {
  background-color: rgba(90, 187, 198, 0.4);
}

.btn-delete {
  background-color: rgba(248, 81, 73, 0.15);
  color: #f85149;
}

.btn-delete:hover {
  background-color: rgba(248, 81, 73, 0.35);
}

.empty-state {
  padding: 60px;
  text-align: center;
  color: #888;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-dialog {
  background-color: #1e2430;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  min-width: 380px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.modal-dialog h3 {
  color: #f85149;
  margin-bottom: 15px;
}

.text-warning {
  color: #f0883e;
}

.modal-dialog p {
  color: #cacaca;
  margin-bottom: 8px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-cancel {
  background-color: transparent;
  color: #888;
  border: 1px solid #555;
  padding: 8px 20px;
  border-radius: 8px;
}

.btn-delete-confirm {
  background-color: #f85149;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
}

.btn-delete-confirm:disabled {
  opacity: 0.5;
}

/* Settings dialog overlay */
.settings-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.settings-dialog {
  background-color: rgba(30, 36, 48, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  width: 560px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.section-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  background-color: rgba(30, 36, 48, 0.98);
  border-radius: 16px 16px 0 0;
  z-index: 1;
}

.tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: #888;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 0.95em;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

.tab-btn.active {
  color: #5abbc6;
  border-bottom-color: #5abbc6;
}

.tab-btn:hover { color: #cacaca; }

.tab-close {
  flex: 0 0 auto;
  padding: 12px 16px;
  color: #888;
  font-size: 1em;
}

.tab-close:hover {
  color: #f85149;
}

.settings-panel {
  padding: 24px;
}

.settings-panel .form-group {
  margin-bottom: 16px;
}

.settings-panel .form-group label {
  display: block;
  color: #9cc5e2;
  font-size: 0.9em;
  margin-bottom: 6px;
}

.settings-panel .form-control {
  width: 100%;
  background-color: rgba(24, 28, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
  padding: 10px 12px;
  border-radius: 8px;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.inline-hint {
  color: #666;
  font-size: 0.8em;
  white-space: nowrap;
}

.btn-save-settings {
  background-color: #5abbc6;
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
}

.btn-save-settings:hover { background-color: #4aa8b3; }
.btn-save-settings:disabled { opacity: 0.5; }

.save-msg {
  margin-left: 12px;
  color: #3fb950;
  font-size: 0.9em;
}

.blogroll-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.blogroll-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.blogroll-item .form-control {
  flex: 1;
}

.btn-delete-sm {
  background: rgba(248, 81, 73, 0.15);
  color: #f85149;
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 12px;
  display: inline-flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
}

.btn-delete-sm:hover { background: rgba(248, 81, 73, 0.35); }

.btn-add-sm {
  background-color: rgba(90, 187, 198, 0.15);
  color: #5abbc6;
  border: 1px dashed rgba(90, 187, 198, 0.3);
  border-radius: 8px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 0.85em;
}

.btn-add-sm:hover { background-color: rgba(90, 187, 198, 0.3); }

/* ---- Search Bar ---- */
.search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.search-field {
  position: relative;
  flex: 1;
  min-width: 180px;
  max-width: 320px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
}

.search-input {
  width: 100%;
  background-color: rgba(37, 45, 56, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e0e0e0;
  padding: 10px 14px 10px 36px;
  border-radius: 10px;
  font-size: 0.9em;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #5abbc6;
  box-shadow: 0 0 0 0.15rem rgba(90, 187, 198, 0.15);
}

.search-input::placeholder {
  color: #666;
}

.search-select {
  width: 100%;
  background-color: rgba(37, 45, 56, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cacaca;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.9em;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}

.search-select:focus {
  outline: none;
  border-color: #5abbc6;
  box-shadow: 0 0 0 0.15rem rgba(90, 187, 198, 0.15);
}

.search-select option {
  background-color: #1e2430;
  color: #cacaca;
}

.btn-clear-search {
  background: transparent;
  color: #888;
  border: 1px solid #555;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85em;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.btn-clear-search:hover {
  color: #f85149;
  border-color: #f85149;
}

/* ---- Tags Settings Panel ---- */
.tags-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background-color: rgba(24, 28, 39, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
}

.tag-item-preview {
  min-width: 80px;
}

.tag-pill-editable {
  pointer-events: none;
  font-size: 0.8em;
  padding: 3px 10px;
  border-radius: 12px;
}

.tag-color-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.color-picker {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  padding: 2px;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}

.color-hex-input {
  width: 90px;
  background-color: rgba(24, 28, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
  padding: 6px 8px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85em;
}

.color-hex-input:focus {
  outline: none;
  border-color: #5abbc6;
}

.empty-tags-hint {
  color: #555;
  text-align: center;
  padding: 16px;
  font-size: 0.85em;
}

.add-tag-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.add-tag-row .form-control {
  flex: 1;
}

@media (max-width: 768px) {
  .posts-table th:nth-child(4),
  .posts-table td:nth-child(4) {
    display: none;
  }
}
</style>
