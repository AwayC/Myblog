<template>
  <div class="container-fluid view-container" @click="handleGlobalClick">
    <!-- Loading Indicator -->
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <div v-else class="journal">
      <!-- ============ HERO ============ -->
      <section class="j-hero">
        <div class="j-eyebrow ui-eyebrow">
          <span class="j-accent">N° 02 — The journal</span>
          <span class="j-line"></span>
          <span>{{ latestPost ? 'Last entry · ' + latestPost.time : 'Since 2025' }}</span>
        </div>

        <div class="j-hero-grid">
          <h1 class="j-title">
            <span class="j-row"><span class="j-sans">Notes</span></span>
            <span class="j-row j-row-2"><span class="j-serif">on &amp; off</span> <span class="j-sans">track</span></span>
          </h1>
          <div class="j-hero-side">
            <p class="j-lead">
              记录技术总结、项目架构与日常思考。<br>
              <span class="ui-serif">Code, pixels &amp; the occasional rant.</span>
            </p>
            <infoCard class="info-card"></infoCard>
          </div>
        </div>
      </section>

      <!-- ============ 数据 ============ -->
      <section class="j-stats">
        <div class="j-stat j-stat-big">
          <span class="j-stat-label">Posts<br>published</span>
          <span class="j-stat-num">{{ posts.length }}</span>
        </div>
        <div class="j-stat-side">
          <div class="j-stat">
            <span class="j-stat-label">Total<br>views</span>
            <span class="j-stat-num j-stat-mid">{{ totalViews }}</span>
          </div>
          <div class="j-stat">
            <span class="j-stat-label">Tags &amp;<br>seasons</span>
            <span class="j-stat-num j-stat-mid">{{ tagNames.length }}<sup>/{{ archive.length }}</sup></span>
          </div>
        </div>
      </section>

      <!-- ============ 搜索 + 标签 ============ -->
      <section class="j-controls">
        <!-- 智能搜索框 -->
        <div class="search-section" @click.stop>
          <div class="search-box-container" :class="{ focused: isDropdownOpen }">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>

            <!-- 已转换的 #tag 胶囊块列表（复用 tagBase 原始渲染逻辑与设定颜色） -->
            <div class="tag-chips-list" v-if="selectedTags.length > 0">
              <tagBase
                v-for="(tag, idx) in selectedTags"
                :key="idx"
                class="tag-chip-item"
                :style="{ backgroundColor: getTagColor(tag) }"
              >
                <span>{{ tag }}</span>
                <button class="chip-remove" @click.stop="removeTag(idx)">✕</button>
              </tagBase>
            </div>

            <!-- 输入框 -->
            <input
              ref="searchInput"
              class="search-input"
              type="text"
              placeholder="搜索文章... 输入 #tag 加空格转换为标签块"
              :value="searchQuery"
              @compositionstart="handleCompositionStart"
              @compositionend="handleCompositionEnd"
              @input="handleSearchInput"
              @keydown="handleKeyDown"
              @focus="isDropdownOpen = true"
            />

            <span class="search-kbd">{{ filteredPosts.length }} / {{ posts.length }}</span>
            <button v-if="searchQuery || selectedTags.length > 0" class="clear-btn" @click="clearAllSearch">✕</button>
          </div>

          <!-- 下拉实时匹配预览列表 -->
          <div class="search-dropdown" v-if="isDropdownOpen && (searchQuery.trim() || selectedTags.length > 0)">
            <div class="dropdown-header">
              <span>匹配文章 ({{ filteredPosts.length }})</span>
            </div>

            <div v-if="filteredPosts.length === 0" class="dropdown-empty">
              未找到匹配的文章
            </div>

            <div v-else class="dropdown-list">
              <div
                v-for="post in filteredPosts.slice(0, 5)"
                :key="post.id"
                class="dropdown-item"
                @click="openPost(post.id)"
              >
                <div class="item-main">
                  <div class="item-title">{{ post.name }}</div>
                  <div class="item-tags" v-if="post.tags && post.tags.length">
                    <tagBase
                      v-for="t in post.tags"
                      :key="t.name"
                      class="mini-tag-base"
                      :style="{ backgroundColor: getTagColor(t) }"
                    >
                      {{ t.name }}
                    </tagBase>
                  </div>
                </div>
                <div class="item-meta">
                  <span class="item-views">{{ postStats[post.id] || 0 }} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 标签快捷过滤 -->
        <div class="tag-filter" v-if="tagNames.length">
          <span class="ui-eyebrow">Filter</span>
          <button
            v-for="name in tagNames"
            :key="name"
            class="tag-filter-btn"
            :class="{ 'is-on': isTagSelected(name) }"
            :style="{ '--tag': getTagColor(name) }"
            @click.stop="toggleTagFilter(name)"
          >
            <i></i>{{ name }}
          </button>
        </div>
      </section>

      <div v-if="filteredPosts.length === 0 && posts.length > 0" class="no-results">
        <span class="ui-serif">Nothing on this lap.</span>
        没有找到匹配的文章。
      </div>

      <!-- ============ 文章卡片（名人堂式错落网格） ============ -->
      <section class="j-grid">
        <div
          v-for="(post, i) in paginatedPosts"
          :key="post.id"
          class="post-item-wrapper"
          :class="'lane-' + (i % 3)"
          @click="openPost(post.id)"
        >
          <postCard class="postCard" :index="post.id" :year="yearOf(post)">
            <template v-if="post.has_img" #has_img>
              <img class="my-card-img" :src="getPostImage(post.img)" :alt="post.name" loading="lazy">
            </template>

            <template #tags>
              <tagBase v-for="tag in post.tags" :key="tag.name" :style="{backgroundColor: getTagColor(tag)}">
                {{tag.name}}
              </tagBase>
            </template>

            <template #header>
              {{ post.name }}
            </template>

            {{ post.summary }}

            <template #time>
              {{ post.time }}
            </template>

            <template #views>
              {{ postStats[post.id] || 0 }} views
            </template>
          </postCard>
        </div>
      </section>

      <!-- Pagination -->
      <nav v-if="totalPages > 1" class="pagination-nav">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="changePage(currentPage - 1)">← Prev</button>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
            <button class="page-link" @click="changePage(page)">{{ String(page).padStart(2, '0') }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="changePage(currentPage + 1)">Next →</button>
          </li>
        </ul>
      </nav>

      <!-- ============ 归档（像 F1 赛季成绩表） ============ -->
      <section class="j-archive" v-if="archive.length">
        <div class="j-archive-head">
          <h2 class="j-archive-title"><span class="j-sans">Archive</span> <span class="j-serif">by season</span></h2>
          <span class="ui-eyebrow">{{ posts.length }} entries · {{ totalViews }} views</span>
        </div>
        <table class="j-table">
          <thead>
            <tr><th>Season</th><th>Posts</th><th>Views</th><th class="j-col-bar">Pace</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in archive" :key="row.year">
              <td class="j-year">{{ row.year }}</td>
              <td>{{ row.count }}</td>
              <td>{{ row.views }}</td>
              <td class="j-col-bar"><span class="j-bar"><i :style="{ width: (row.count / archiveMax) * 100 + '%' }"></i></span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import postCard from '../components/postCard.vue'; 
import tagBase from '../components/tagBase.vue';
import infoCard from '../components/infoCard.vue';
import {gsap} from 'gsap'; 
import router from '@/router/index';

export default { 
    name: "PostlistView", 
    components: { 
        postCard, 
        tagBase, 
        infoCard,
    }, 
    data() {
      return {
        posts: [],
        tagColorMap: {},
        isLoading: true,
        currentPage: 1,
        pageSize: 6,
        postStats: {},
        searchQuery: '',
        selectedTags: [], // 已转换的 #tag 胶囊块列表
        isDropdownOpen: false, // 下拉预览菜单显隐状态
        isComposing: false, // 拼音/中文输入法合成状态标记
      };
    },
    computed: {
      filteredPosts() {
        let result = [...this.posts].sort((a, b) => b.id - a.id);

        // 1. 过滤已转换的 selectedTags 胶囊块
        if (this.selectedTags.length > 0) {
          result = result.filter(p =>
            p.tags && this.selectedTags.every(st =>
              p.tags.some(t => t.name.toLowerCase() === st.toLowerCase())
            )
          );
        }

        // 2. 过滤未转换的文本里的 #tag 或普通关键字
        if (this.searchQuery.trim()) {
          const raw = this.searchQuery.trim();
          const tagMatch = raw.match(/#(\S+)/g);
          if (tagMatch) {
            const tagNames = tagMatch.map(t => t.slice(1).toLowerCase());
            result = result.filter(p =>
              p.tags && tagNames.every(tn => p.tags.some(t => t.name.toLowerCase().includes(tn)))
            );
          }
          const textPart = raw.replace(/#\S+/g, '').trim().toLowerCase();
          if (textPart) {
            result = result.filter(p =>
              p.name.toLowerCase().includes(textPart) ||
              (p.summary && p.summary.toLowerCase().includes(textPart))
            );
          }
        }
        return result;
      },
      totalPages() {
        return Math.ceil(this.filteredPosts.length / this.pageSize);
      },
      // ---- 以下只用于页面展示的统计，不改变任何数据 ----
      totalViews() {
        return Object.values(this.postStats).reduce((sum, v) => sum + (Number(v) || 0), 0);
      },
      tagNames() {
        return Object.keys(this.tagColorMap).filter(k => k !== 'default');
      },
      latestPost() {
        return [...this.posts].sort((a, b) => b.id - a.id)[0] || null;
      },
      archive() {
        const map = {};
        this.posts.forEach(p => {
          const y = this.yearOf(p) || '—';
          if (!map[y]) map[y] = { year: y, count: 0, views: 0 };
          map[y].count += 1;
          map[y].views += Number(this.postStats[p.id]) || 0;
        });
        return Object.values(map).sort((a, b) => String(b.year).localeCompare(String(a.year)));
      },
      archiveMax() {
        return Math.max(1, ...this.archive.map(r => r.count));
      },
      paginatedPosts() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.filteredPosts.slice(start, end);
      }
    },
    methods: {
      yearOf(post) {
        const m = String((post && post.time) || '').match(/\d{4}/);
        return m ? m[0] : '';
      },
      isTagSelected(name) {
        return this.selectedTags.some(t => t.toLowerCase() === name.toLowerCase());
      },
      // 点击标签 = 输入 #tag 的快捷方式，复用同一个 selectedTags 过滤
      toggleTagFilter(name) {
        const idx = this.selectedTags.findIndex(t => t.toLowerCase() === name.toLowerCase());
        if (idx >= 0) this.removeTag(idx);
        else this.selectedTags.push(name);
        this.currentPage = 1;
      },
      handleCompositionStart() {
        this.isComposing = true;
      },

      handleCompositionEnd(e) {
        this.isComposing = false;
        // 拼音选词结束，手动触发一次完整的标签转换解析
        this.handleSearchInput(e);
      },

      handleSearchInput(e) {
        const inputVal = e.target.value;
        this.searchQuery = inputVal;
        this.isDropdownOpen = true;

        // 如果用户正在使用拼音/中文输入法打字组词中，暂不触发 #tag 胶囊块转换
        if (this.isComposing) {
          return;
        }

        // 正则匹配 `#tagName ` (前面是开头或空格，后面带空格)
        const tagRegex = /(?:^|\s)#(\S+)\s/g;
        let match;
        let hasNewTag = false;
        let cleanText = inputVal;

        while ((match = tagRegex.exec(inputVal)) !== null) {
          const tagName = match[1];
          if (tagName && !this.selectedTags.some(t => t.toLowerCase() === tagName.toLowerCase())) {
            this.selectedTags.push(tagName);
            hasNewTag = true;
          }
        }

        if (hasNewTag) {
          cleanText = cleanText.replace(/(?:^|\s)#\S+\s/g, ' ').trimStart();
          this.searchQuery = cleanText;
        }
      },

      handleKeyDown(e) {
        // 正在拼音组词中时不响应退格删除胶囊块
        if (this.isComposing) return;

        // 当输入框为空且按退格键 (Backspace) 时，删除最后一个胶囊块
        if (e.key === 'Backspace' && this.searchQuery === '' && this.selectedTags.length > 0) {
          this.selectedTags.pop();
        }
      },

      removeTag(index) {
        this.selectedTags.splice(index, 1);
      },

      clearAllSearch() {
        this.searchQuery = '';
        this.selectedTags = [];
        this.isDropdownOpen = false;
      },

      handleGlobalClick() {
        this.isDropdownOpen = false;
      },

      getPostImage(imagePath) {
        if (imagePath && typeof imagePath === 'string' && !imagePath.startsWith('http')) {
          return imagePath.replace(/^@\/posts\//, '/posts/');
        }
        return imagePath;
      },
      getTagColor(tag) { 
          const tagName = typeof tag === 'string' ? tag : (tag ? tag.name : '');
          return this.tagColorMap[tagName] || this.tagColorMap['default'] || '#6c757d'; 
      },
      async fetchStats() {
        try {
          const baseUrl = process.env.VUE_APP_API_URL || '';
          const apiUrl = baseUrl.endsWith('/api') ? `${baseUrl}/stats` : `${baseUrl}/api/stats`;
          const response = await fetch(apiUrl);
          if (response.ok) {
            const stats = await response.json();
            const statsMap = {};
            stats.forEach(s => {
              statsMap[s.post_id] = s.views;
            });
            this.postStats = statsMap;
          }
        } catch (error) {
          console.error("Failed to fetch article stats:", error);
        }
      },
      changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
      },
      animatePosts() {
        this.$nextTick(() => {
          gsap.fromTo(".post-item-wrapper", 
            { y: 30, opacity: 0 },
            {
              duration: 0.6, 
              y: 0, 
              opacity: 1, 
              stagger: 0.1, 
              ease: "power2.out",
              clearProps: "all"
            }
          ); 
        });
      }
    },
    setup() { 
      const openPost = (id) => { 
        router.push({name: 'post', params: {id}}); 
      }; 
      
      return {
        openPost, 
      }
    }, 
    async mounted() {
      try {
        const apiBase = process.env.VUE_APP_API_URL || '';
        const apiRoot = apiBase.endsWith('/api') ? apiBase : `${apiBase}/api`;

        const [postsResponse, tagMapResponse] = await Promise.all([
          fetch(`${apiRoot}/posts`),
          fetch(`${apiRoot}/tags`)
        ]);

        if (!postsResponse.ok) throw new Error(`Posts HTTP error! status: ${postsResponse.status}`);
        if (!tagMapResponse.ok) throw new Error(`Tags HTTP error! status: ${tagMapResponse.status}`);

        this.posts = await postsResponse.json();
        this.tagColorMap = await tagMapResponse.json();

        this.isLoading = false;
        this.fetchStats();

        this.$nextTick(() => {
          this.animatePosts();
        });

      } catch (error) {
        console.error("加载数据失败:", error);
        this.isLoading = false;
      }
    }
}
</script>


<style scoped>
.view-container {
  padding: calc(var(--nav-h) + 32px) 28px 0;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 2px solid var(--c-line-strong);
  border-top-color: var(--c-accent);
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.journal {
  max-width: 1320px;
  margin: 0 auto;
}

/* ---------- 共用的字体组合 ---------- */
.j-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
}

.j-serif {
  font-family: var(--f-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--c-accent);
  letter-spacing: -0.01em;
}

/* ---------- HERO ---------- */
.j-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
}

.j-accent {
  color: var(--c-accent);
}

.j-line {
  flex: 1;
  height: 1px;
  background: var(--c-line-strong);
}

.j-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 40px;
  align-items: end;
  margin-top: 28px;
}

.j-title {
  margin: 0;
  font-size: clamp(4rem, 12.5vw, 13rem);
  line-height: 0.82;
  color: var(--c-ink);
}

.j-row {
  display: block;
  overflow: hidden;
  padding-bottom: 0.04em;
}

.j-row > span {
  display: inline-block;
  animation: j-rise 1.1s var(--ease-out) both;
}

.j-row-2 > span {
  animation-delay: 0.08s;
}

.j-row-2 .j-serif {
  font-size: 0.92em;
}

@keyframes j-rise {
  from { transform: translateY(105%); }
  to { transform: none; }
}

.j-hero-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.j-lead {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--c-ink-2);
}

.j-lead .ui-serif {
  font-size: 1.25rem;
  color: var(--c-ink);
}

/* ---------- 数据（大数字） ---------- */
.j-stats {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 40px;
  margin: 90px 0 70px;
  padding-top: 24px;
  border-top: 1px solid var(--c-line);
}

.j-stat {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.j-stat-label {
  padding-top: 0.9em;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 0.78rem;
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--c-ink-2);
  min-width: 82px;
}

.j-stat-num {
  font-family: var(--f-sans);
  font-weight: 700;
  font-stretch: 85%;
  font-size: clamp(8rem, 20vw, 19rem);
  line-height: 0.78;
  letter-spacing: -0.06em;
  color: var(--c-ink);
  font-variant-numeric: tabular-nums;
}

.j-stat-big .j-stat-num {
  -webkit-text-stroke: 0;
}

.j-stat-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.j-stat-mid {
  font-size: clamp(4.5rem, 9vw, 8.5rem);
}

.j-stat-mid sup {
  font-size: 0.28em;
  top: -1.9em;
  margin-left: 4px;
  color: var(--c-accent);
  letter-spacing: 0;
}

/* ---------- 搜索 + 过滤 ---------- */
.j-controls {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 44px;
}

.search-section {
  position: relative;
  width: 100%;
}

.search-box-container {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 60px;
  background: rgba(17, 17, 14, 0.85);
  border: 1px solid var(--c-line-strong);
  padding: 8px 18px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

.search-box-container.focused {
  border-color: var(--c-accent);
  box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.12);
}

.search-icon {
  color: var(--c-ink-3);
  flex-shrink: 0;
}

.search-box-container.focused .search-icon {
  color: var(--c-accent);
}

/* 标签块 (Tag Chips) 复用原版 tagBase 逻辑 */
.tag-chips-list {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.tag-chip-item {
  display: inline-flex !important;
  align-items: center !important;
  gap: 4px !important;
  margin: 0 !important;
}

.chip-remove {
  background: none;
  border: none;
  color: #1a1a1a;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
  opacity: 0.6;
}

.chip-remove:hover {
  opacity: 1;
}

.search-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  color: var(--c-ink);
  font-size: 1rem;
  outline: none;
  padding: 4px 0;
  min-width: 140px;
}

.search-input::placeholder {
  color: var(--c-ink-3);
  font-size: 0.9rem;
}

.search-kbd {
  flex-shrink: 0;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  color: var(--c-ink-3);
  padding: 4px 8px;
  border: 1px solid var(--c-line-strong);
  border-radius: 6px;
}

.clear-btn {
  background: none;
  border: none;
  color: var(--c-ink-3);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 2px 6px;
  flex-shrink: 0;
}

.clear-btn:hover {
  color: var(--c-accent);
}

.search-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: rgba(17, 17, 14, 0.97);
  border: 1px solid var(--c-line-strong);
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
  z-index: 100;
  animation: fadeIn 0.25s var(--ease-out);
}

.dropdown-header {
  padding: 10px 16px;
  font-family: var(--f-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  border-bottom: 1px solid var(--c-line);
}

.dropdown-empty {
  padding: 18px;
  text-align: center;
  color: var(--c-ink-3);
  font-size: 0.88rem;
}

.dropdown-list {
  max-height: 300px;
  overflow-y: auto;
}

.dropdown-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid var(--c-line);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--c-accent);
  transform: scaleY(0);
  transition: transform 0.3s var(--ease-out);
}

.dropdown-item:hover {
  background: rgba(255, 128, 0, 0.06);
}

.dropdown-item:hover::before {
  transform: scaleY(1);
}

.item-main {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.item-title {
  color: var(--c-ink);
  font-size: 0.92rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-item:hover .item-title {
  color: var(--c-accent);
}

.item-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.mini-tag-base {
  margin: 0 !important;
  font-size: 0.64rem !important;
  padding: 0.25em 0.5em !important;
}

.item-meta {
  font-family: var(--f-mono);
  font-size: 0.7rem;
  color: var(--c-ink-3);
  flex-shrink: 0;
  margin-left: 12px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.tag-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-filter .ui-eyebrow {
  margin-right: 6px;
}

.tag-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--c-line-strong);
  border-radius: 8px;
  background: transparent;
  color: var(--c-ink-2);
  font-family: var(--f-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tag-filter-btn i {
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--tag);
}

.tag-filter-btn:hover {
  color: var(--c-ink);
  border-color: var(--c-ink-3);
}

.tag-filter-btn.is-on {
  background: var(--c-accent);
  border-color: var(--c-accent);
  color: var(--c-accent-ink);
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: var(--c-ink-3);
  padding: 60px 0;
  font-size: 0.95rem;
}

.no-results .ui-serif {
  font-size: 2rem;
  color: var(--c-ink);
}

/* ---------- 错落网格 ---------- */
.j-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px 26px;
  align-items: start;
}

.post-item-wrapper {
  cursor: pointer;
}

/* 中间一列整体下沉，像原站名人堂的错落排布 */
.lane-1 {
  margin-top: 70px;
}

.postCard {
  width: 100%;
}

/* ---------- 分页 ---------- */
.pagination-nav {
  display: flex;
  justify-content: center;
  margin: 70px 0 0;
}

.pagination {
  gap: 6px;
  margin: 0;
}

.page-link {
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  border-radius: 10px !important;
  background-color: rgba(17, 17, 14, 0.85);
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
  font-family: var(--f-mono);
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.page-link:hover {
  background-color: rgba(255, 128, 0, 0.08);
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.page-link:focus {
  box-shadow: 0 0 0 3px rgba(255, 128, 0, 0.2);
}

.page-item.active .page-link {
  background-color: var(--c-accent);
  border-color: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 500;
}

.page-item.disabled .page-link {
  background-color: transparent;
  color: var(--c-ink-3);
  border-color: var(--c-line);
  opacity: 0.6;
}

/* ---------- 归档表 ---------- */
.j-archive {
  margin-top: 120px;
}

.j-archive-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;
}

.j-archive-title {
  margin: 0;
  font-size: clamp(2.6rem, 6vw, 5.4rem);
  line-height: 0.85;
  color: var(--c-ink);
}

.j-table {
  width: 100%;
  border-collapse: collapse;
}

.j-table th {
  padding: 0 0 12px;
  font-family: var(--f-sans);
  font-weight: 700;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  text-align: left;
  border-bottom: 1px solid var(--c-line-strong);
}

.j-table td {
  padding: 14px 0;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--c-ink);
  border-bottom: 1px solid var(--c-line);
  font-variant-numeric: tabular-nums;
}

.j-table tr:hover td {
  color: var(--c-accent);
}

.j-col-bar {
  width: 40%;
}

.j-bar {
  display: block;
  height: 6px;
  border-radius: 6px;
  background: var(--c-line);
  overflow: hidden;
}

.j-bar i {
  display: block;
  height: 100%;
  border-radius: 6px;
  background: var(--c-accent);
}

/* ---------- profile 卡在 hero 里 ---------- */
.info-card {
  width: 100%;
}

/* ---------- 响应式 ---------- */
@media (max-width: 1100px) {
  .j-hero-grid {
    grid-template-columns: 1fr;
  }

  .j-hero-side {
    flex-direction: row;
    align-items: flex-start;
  }

  .j-lead {
    flex: 1;
  }

  .info-card {
    width: 340px;
    flex-shrink: 0;
  }

  .j-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lane-1 {
    margin-top: 0;
  }

  .post-item-wrapper:nth-child(even) {
    margin-top: 50px;
  }
}

@media (max-width: 768px) {
  .view-container {
    padding: calc(var(--nav-h) + 12px) 16px 0;
  }

  .j-hero-side {
    flex-direction: column;
  }

  .info-card {
    width: 100%;
  }

  .j-stats {
    grid-template-columns: 1fr;
    margin: 56px 0 44px;
  }

  .j-stat-side {
    flex-direction: row;
  }

  .j-grid {
    grid-template-columns: 1fr;
  }

  .post-item-wrapper:nth-child(even) {
    margin-top: 0;
  }

  .search-kbd {
    display: none;
  }

  .j-col-bar {
    display: none;
  }

  .j-archive-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
