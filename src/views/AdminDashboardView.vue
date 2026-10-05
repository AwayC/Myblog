<template>
  <div class="admin-dashboard">
    <div class="dashboard-header">
      <div class="dash-eyebrow ui-eyebrow">
        <span class="accent">N° 00 — Pit wall</span>
        <span class="dash-line"></span>
        <span class="user-info"><i class="user-dot"></i>{{ username }}</span>
      </div>
      <div class="dash-title-row">
        <h1 class="dash-title">
          <span class="dt-sans">Control</span>
          <span class="dt-serif">room</span>
        </h1>
        <div class="header-actions">
          <button class="btn btn-new roll-host" @click="createPost">
            <span class="btn-plus">+</span><RollText text="New Post" />
          </button>
          <button class="btn btn-settings roll-host" @click="toggleSettings">
            <RollText :key="showSettings ? 1 : 0" :text="showSettings ? 'Hide Settings' : 'Settings'" />
          </button>
          <button class="btn btn-logout roll-host" @click="logout"><RollText text="Logout" /></button>
        </div>
      </div>

      <div class="dash-stats">
        <div class="stat"><span>Posts</span><b>{{ posts.length }}</b></div>
        <div class="stat"><span>Tags</span><b>{{ Object.keys(availableTags).length }}</b></div>
        <div class="stat"><span>Showing</span><b>{{ filteredPosts.length }}</b></div>
        <div class="stat"><span>With cover</span><b>{{ posts.filter(p => p.has_img).length }}</b></div>
      </div>
    </div>

    <!-- 搜索 / 标签过滤（复用原有 filteredPosts） -->
    <div class="search-bar">
      <div class="search-field">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input v-model="searchQuery" class="search-input" type="text" placeholder="Search by title..." />
      </div>
      <div class="search-field search-field-select">
        <select v-model="tagFilter" class="search-select">
          <option value="">All tags</option>
          <option v-for="(color, name) in availableTags" :key="name" :value="name">{{ name }}</option>
        </select>
      </div>
      <button v-if="searchQuery || tagFilter" class="btn-clear-search" @click="clearSearch">Clear</button>
    </div>

    <div class="posts-table-wrapper">
      <div v-if="postsLoading" class="loading-state">
        <div class="spinner"></div>
        <span>Loading posts...</span>
      </div>
      <table class="posts-table" v-else-if="filteredPosts.length > 0">
        <thead>
          <tr>
            <th>N°</th>
            <th>Title</th>
            <th>Tags</th>
            <th>Date</th>
            <th class="th-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in filteredPosts" :key="post.id">
            <td class="td-id">{{ String(post.id).padStart(2, '0') }}</td>
            <td class="td-title">
              <span v-if="post.has_img" class="img-flag" title="Has cover image">IMG</span>
              {{ post.name }}
            </td>
            <td>
              <span
                class="tag-pill"
                v-for="tag in post.tags"
                :key="tag.name"
                :style="{
                  backgroundColor: (tags[tag.name] || tags.default || '#e0e0e0') + '26',
                  color: tags[tag.name] || tags.default || '#e0e0e0'
                }"
              >{{ tag.name }}</span>
            </td>
            <td class="td-date">{{ post.time }}</td>
            <td class="actions">
              <button class="btn btn-sm btn-edit roll-host" @click="editPost(post.id)"><RollText text="Edit" /></button>
              <button class="btn btn-sm btn-delete roll-host" @click="confirmDelete(post)"><RollText text="Delete" /></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else-if="posts.length > 0" class="empty-state">没有匹配的文章 — try another search.</div>
      <div v-else class="empty-state">No posts yet. Click "+ New Post" to create one.</div>
    </div>

    <!-- Settings dialog -->
    <div v-if="showSettings" class="settings-overlay" @click.self="showSettings = false">
      <div class="settings-dialog">
        <div class="settings-head">
          <h2 class="settings-title"><span class="dt-sans">Settings</span></h2>
          <button class="tab-btn tab-close" @click="showSettings = false">✕</button>
        </div>
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
          <button class="btn btn-save-settings roll-host" @click="saveProfile" :disabled="savingProfile">
            <RollText :key="savingProfile ? 1 : 0" :text="savingProfile ? 'Saving...' : 'Save Profile'" />
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
              <span class="row-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <input v-model="b.name" class="form-control" placeholder="Name" />
              <input v-model="b.link" class="form-control" placeholder="https://..." />
              <button class="btn btn-delete-sm" @click="removeBlogroll(i)">✕</button>
            </div>
          </div>
          <div class="panel-actions">
            <button class="btn btn-add-sm" @click="addBlogroll">+ Add</button>
            <button class="btn btn-save-settings roll-host" @click="saveBlogroll" :disabled="savingBlogroll">
              <RollText :key="savingBlogroll ? 1 : 0" :text="savingBlogroll ? 'Saving...' : 'Save Blogroll'" />
            </button>
            <span v-if="blogrollMsg" class="save-msg">{{ blogrollMsg }}</span>
          </div>
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
                <span class="tag-pill tag-pill-editable" :style="{ backgroundColor: color }">{{ name }}</span>
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
          <button class="btn btn-save-settings roll-host" @click="saveTags" :disabled="savingTags">
            <RollText :key="savingTags ? 1 : 0" :text="savingTags ? 'Saving...' : 'Save Tags'" />
          </button>
          <span v-if="tagsMsg" class="save-msg">{{ tagsMsg }}</span>
          </template>
        </div>
      </div>
    </div>

    <!-- Delete confirm modal -->
    <div v-if="deleteTarget" class="modal-overlay" @click.self="deleteTarget = null">
      <div class="modal-dialog">
        <span class="ui-eyebrow modal-eyebrow">Red flag</span>
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
      newTagColor: '#FFB27A',
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

    // 并行加载文章列表、标签、名片，互不阻塞
    await Promise.all([
      this.fetchPosts(),
      this.loadTags(),
      this.loadProfile(),
    ]);
  },
};
</script>

<style scoped>
.admin-dashboard {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: calc(var(--nav-h) + 24px) 28px 40px;
}

.accent {
  color: var(--c-accent);
}

/* ---------- 头部 ---------- */
.dash-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
}

.dash-line {
  flex: 1;
  height: 1px;
  background: var(--c-line-strong);
}

.user-info {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--c-ink-2);
}

.user-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c-accent);
  box-shadow: 0 0 10px var(--c-accent);
}

.dash-title-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin: 22px 0 36px;
}

.dash-title {
  margin: 0;
  font-size: clamp(3.4rem, 9vw, 8.4rem);
  line-height: 0.82;
  color: var(--c-ink);
}

.dt-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.035em;
}

.dt-serif {
  font-family: var(--f-serif);
  font-style: italic;
  color: var(--c-accent);
  margin-left: 0.15em;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-new {
  background: var(--c-accent);
  border: 1px solid var(--c-accent);
  color: var(--c-accent-ink);
}

.btn-plus {
  font-size: 1.1rem;
  line-height: 1;
}

.btn-new:hover {
  background: var(--c-accent-soft);
  color: var(--c-accent-ink);
  box-shadow: 0 12px 36px var(--c-accent-glow);
}

.btn-settings,
.btn-logout {
  background: rgba(17, 17, 14, 0.8);
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink);
}

.btn-settings:hover {
  border-color: var(--c-ink);
  color: var(--c-ink);
}

.btn-logout:hover {
  border-color: #ff5a4f;
  color: #ff8a80;
}

/* 数据格 */
.dash-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--c-line-strong);
  border-bottom: 1px solid var(--c-line-strong);
  margin-bottom: 34px;
}

.stat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  min-height: 96px;
  padding: 14px 18px;
  border-left: 1px solid var(--c-line);
}

.stat:first-child {
  border-left: 0;
  padding-left: 0;
}

.stat span {
  font-family: var(--f-sans);
  font-weight: 700;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.stat b {
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: clamp(1.8rem, 3.4vw, 3rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  color: var(--c-ink);
  font-variant-numeric: tabular-nums;
}

/* ---------- 搜索 ---------- */
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.search-field {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-field-select {
  flex: 0 0 200px;
  min-width: 160px;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--c-ink-3);
  pointer-events: none;
}

.search-input,
.search-select {
  width: 100%;
  height: 48px;
  background-color: rgba(17, 17, 14, 0.85);
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-size: 0.92rem;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.search-input {
  padding: 0 14px 0 40px;
}

.search-input::placeholder {
  color: var(--c-ink-3);
}

.search-select {
  padding: 0 34px 0 14px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23ff8000' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
}

.search-input:focus,
.search-select:focus {
  outline: none;
  border-color: var(--c-accent);
  box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.12);
}

.search-select option {
  background-color: #141411;
  color: var(--c-ink);
}

.btn-clear-search {
  height: 48px;
  padding: 0 16px;
  background: transparent;
  color: var(--c-ink-2);
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-clear-search:hover {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

/* ---------- 表格（像 F1 成绩表） ---------- */
.posts-table-wrapper {
  border-top: 1px solid var(--c-line-strong);
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 50px 0;
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.loading-state .spinner {
  width: 32px;
  height: 32px;
  border: 2px solid var(--c-line-strong);
  border-top-color: var(--c-accent);
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
  padding: 14px 12px;
  font-family: var(--f-sans);
  font-weight: 700;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  text-align: left;
  border-bottom: 1px solid var(--c-line-strong);
}

.posts-table th:first-child,
.posts-table td:first-child {
  padding-left: 0;
}

.th-actions {
  text-align: right !important;
}

.posts-table td {
  padding: 16px 12px;
  border-bottom: 1px solid var(--c-line);
  color: var(--c-ink-2);
  vertical-align: middle;
  transition: background 0.25s;
}

.posts-table tr:hover td {
  background: rgba(255, 128, 0, 0.035);
}

.td-id {
  width: 70px;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  color: var(--c-ink-3);
  font-variant-numeric: tabular-nums;
}

.posts-table tr:hover .td-id {
  color: var(--c-accent);
}

.td-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--c-ink);
}

.img-flag {
  display: inline-block;
  margin-right: 8px;
  padding: 2px 5px;
  border: 1px solid var(--c-line-strong);
  border-radius: 4px;
  font-family: var(--f-mono);
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  color: var(--c-accent);
  vertical-align: 2px;
}

.td-date {
  font-family: var(--f-mono);
  font-size: 0.74rem;
  white-space: nowrap;
  color: var(--c-ink-3);
}

.tag-pill {
  display: inline-block;
  margin: 2px 4px 2px 0;
  padding: 4px 8px 3px;
  border-radius: 4px;
  font-family: var(--f-mono);
  font-size: 0.64rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.actions {
  white-space: nowrap;
  text-align: right;
}

.btn-sm {
  height: 34px;
  padding: 0 12px;
  font-size: 0.7rem;
  border-radius: 8px;
}

.btn-edit {
  margin-right: 6px;
  background: transparent;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink);
}

.btn-edit:hover {
  background: var(--c-accent);
  border-color: var(--c-accent);
  color: var(--c-accent-ink);
}

.btn-delete {
  background: transparent;
  border: 1px solid var(--c-line);
  color: var(--c-ink-3);
}

.btn-delete:hover {
  border-color: #ff5a4f;
  color: #ff8a80;
}

.empty-state {
  padding: 60px 0;
  text-align: center;
  color: var(--c-ink-3);
}

/* ---------- 弹窗共用 ---------- */
.modal-overlay,
.settings-overlay {
  position: fixed;
  inset: 0;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(8, 8, 6, 0.78);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: overlay-in 0.3s ease;
}

@keyframes overlay-in {
  from { opacity: 0; }
}

.modal-dialog {
  --cut: 22px;
  position: relative;
  isolation: isolate;
  width: min(460px, 92vw);
  max-width: none;
  margin: 0;
  /* bootstrap 的 .modal-dialog 默认 pointer-events: none */
  pointer-events: auto;
  padding: 26px 28px;
  animation: dialog-in 0.45s var(--ease-out);
}

@keyframes dialog-in {
  from { opacity: 0; transform: translateY(20px); }
}

.modal-dialog::before,
.modal-dialog::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
}

.modal-dialog::before {
  background: #ff5a4f;
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

.modal-dialog::after {
  background: #141411;
  clip-path: polygon(1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px), calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px));
}

.modal-eyebrow {
  color: #ff8a80;
}

.modal-dialog h3 {
  margin: 8px 0 14px;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--c-ink);
}

.modal-dialog p {
  margin-bottom: 8px;
  color: var(--c-ink-2);
}

.modal-dialog strong {
  color: var(--c-ink);
}

.text-warning {
  color: #ff8a80 !important;
  font-size: 0.86rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 22px;
}

.btn-cancel {
  background: transparent;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink);
}

.btn-cancel:hover {
  border-color: var(--c-ink);
  color: var(--c-ink);
}

.btn-delete-confirm {
  background: #ff5a4f;
  border: 1px solid #ff5a4f;
  color: #1a0503;
}

.btn-delete-confirm:hover {
  background: #ff7a70;
  color: #1a0503;
}

.btn-delete-confirm:disabled {
  opacity: 0.5;
}

/* ---------- 设置面板 ---------- */
.settings-dialog {
  width: min(680px, 100%);
  max-height: 88vh;
  overflow-y: auto;
  background: #121210;
  border: 1px solid var(--c-line-strong);
  border-radius: 16px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
  animation: dialog-in 0.45s var(--ease-out);
}

.settings-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 4px;
}

.settings-title {
  margin: 0;
  font-size: 2.2rem;
  line-height: 1;
  color: var(--c-ink);
}

.section-tabs {
  display: flex;
  gap: 4px;
  padding: 14px 24px 0;
  border-bottom: 1px solid var(--c-line-strong);
}

.tab-btn {
  position: relative;
  padding: 10px 14px 12px;
  background: transparent;
  border: 0;
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  cursor: pointer;
  transition: color 0.25s;
}

.tab-btn::after {
  content: '';
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: -1px;
  height: 2px;
  background: var(--c-accent);
  transform: scaleX(0);
  transition: transform 0.35s var(--ease-out);
}

.tab-btn:hover {
  color: var(--c-ink);
}

.tab-btn.active {
  color: var(--c-accent);
}

.tab-btn.active::after {
  transform: scaleX(1);
}

.tab-close {
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-family: var(--f-sans);
  font-size: 0.9rem;
}

.tab-close::after {
  display: none;
}

.tab-close:hover {
  background: var(--c-ink);
  color: var(--c-accent-ink);
}

.settings-panel {
  padding: 22px 24px 26px;
}

.settings-panel .form-group {
  margin-bottom: 16px;
}

.settings-panel .form-group label {
  display: block;
  margin-bottom: 8px;
  font-family: var(--f-mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.settings-panel .form-control,
.add-tag-row .form-control,
.blogroll-item .form-control {
  min-height: 44px;
  background-color: #0d0d0b;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-size: 0.92rem;
}

.settings-panel .form-control::placeholder {
  color: var(--c-ink-3);
}

.settings-panel .form-control:focus {
  background-color: #0d0d0b;
  border-color: var(--c-accent);
  color: var(--c-ink);
  box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.12);
}

.input-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.inline-hint {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  color: var(--c-ink-3);
  white-space: nowrap;
}

.btn-save-settings {
  background: var(--c-accent);
  border: 1px solid var(--c-accent);
  color: var(--c-accent-ink);
}

.btn-save-settings:hover {
  background: var(--c-accent-soft);
  color: var(--c-accent-ink);
}

.btn-save-settings:disabled {
  opacity: 0.5;
}

.save-msg {
  margin-left: 12px;
  font-family: var(--f-mono);
  font-size: 0.72rem;
  color: var(--c-accent);
}

.panel-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.blogroll-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}

.blogroll-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.row-num {
  width: 26px;
  flex-shrink: 0;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  color: var(--c-ink-3);
}

.blogroll-item .form-control {
  flex: 1;
}

.btn-delete-sm {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-3);
  border-radius: 10px;
}

.btn-delete-sm:hover {
  border-color: #ff5a4f;
  color: #ff8a80;
}

.btn-add-sm {
  background: transparent;
  border: 1px dashed var(--c-ink-3);
  color: var(--c-ink);
}

.btn-add-sm:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
}

.btn-add-sm:disabled {
  opacity: 0.4;
}

/* 标签管理 */
.tags-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dashed var(--c-line);
}

.tag-item-preview {
  min-width: 140px;
}

.tag-pill-editable {
  color: #161511;
  padding: 6px 10px 5px;
  font-size: 0.7rem;
}

.tag-color-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.color-picker {
  width: 40px;
  height: 40px;
  padding: 3px;
  background: #0d0d0b;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  cursor: pointer;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-picker::-webkit-color-swatch {
  border: 0;
  border-radius: 7px;
}

.color-hex-input {
  width: 100px;
  height: 40px;
  padding: 0 10px;
  background: #0d0d0b;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-family: var(--f-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
}

.color-hex-input:focus {
  outline: none;
  border-color: var(--c-accent);
}

.empty-tags-hint {
  padding: 18px 0;
  text-align: center;
  color: var(--c-ink-3);
  font-size: 0.86rem;
}

.add-tag-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
}

.add-tag-row .form-control {
  flex: 1;
}

@media (max-width: 768px) {
  .admin-dashboard {
    padding: calc(var(--nav-h) + 10px) 16px 32px;
  }

  .header-actions {
    flex-wrap: wrap;
  }

  .dash-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat:nth-child(3) {
    border-left: 0;
    padding-left: 0;
  }

  .stat:nth-child(-n + 2) {
    border-bottom: 1px solid var(--c-line);
  }

  .search-field-select {
    flex: 1 1 100%;
  }

  /* 表格容器横向滚动，避免挤压变形 */
  .posts-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .posts-table {
    min-width: 560px;
  }

  .posts-table th:nth-child(4),
  .posts-table td:nth-child(4) {
    display: none;
  }

  /* Settings 对话框全屏化，方便手机操作 */
  .settings-overlay {
    padding: 0;
  }

  .settings-dialog {
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    border: none;
  }

  .settings-panel {
    padding: 16px;
  }

  .input-row {
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .inline-hint {
    white-space: normal;
  }

  .blogroll-item {
    flex-wrap: wrap;
  }

  .blogroll-item .form-control {
    flex: 1 1 100%;
  }

  .tag-item {
    flex-wrap: wrap;
  }

  .tag-color-row {
    flex: 1 1 100%;
    justify-content: flex-end;
  }
}
</style>
