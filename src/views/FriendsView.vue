<template>
  <div class="friends-container">
    <div class="content-wrapper">
      
      <!-- 头部 Header -->
      <div class="friends-header">
        <div class="friends-eyebrow ui-eyebrow">
          <span v-high>N° 03 — Paddock</span>
          <span v-high="{ delay: 150 }">{{ String(blogs.length).padStart(2, '0') }} friends</span>
        </div>
        <h1 class="page-title" v-high="{ delay: 120 }">
          <span class="page-title-main">Friends</span>
          <span class="page-title-alt ui-serif">fellow drivers</span>
        </h1>
        <p class="page-subtitle" v-high="{ color: 'soft', delay: 360 }">
          海内存知己，天涯若比邻。欢迎交流与分享技术心得。
        </p>
      </div>

      <!-- 友链列表网格区 -->
      <div class="section-container">
        <!-- 加载动画 -->
        <div v-if="isLoading" class="loading-box">
          <div class="ui-spinner"></div>
        </div>

        <div v-else class="friends-grid">
          <a
            v-for="(friend, i) in blogs"
            :key="friend.id || friend.name"
            :href="friend.link"
            target="_blank"
            rel="noopener noreferrer"
            class="friend-card"
          >
            <div class="card-avatar">
              <img
                :src="friend.avatar || defaultAvatar(friend.name)"
                :alt="friend.name"
                @error="onAvatarError($event, friend.name)"
              />
            </div>
            <div class="card-info">
              <div class="friend-name">
                <span>{{ friend.name }}</span>
                <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <p class="friend-desc">{{ friend.desc || friend.description || '技术博主' }}</p>
            </div>
            <span class="friend-index">{{ String(i + 1).padStart(2, '0') }}</span>
          </a>
        </div>
      </div>

      <!-- 申请友链：展示本站信息，方便对方复制 -->
      <section class="join">
        <div class="join-head">
          <h2 class="join-title" v-high><span class="join-sans">Join</span> <span class="join-serif">the grid</span></h2>
          <p class="join-text" v-high="{ color: 'soft', delay: 240 }">欢迎交换友链～ 把下面的信息加到你的站点，然后在 GitHub 或 B 站联系我。</p>
        </div>
        <div class="join-card">
          <div class="join-row"><span>Name</span><b>AWAY's Studio</b></div>
          <div class="join-row"><span>Link</span><b>{{ siteUrl }}</b></div>
          <div class="join-row"><span>Avatar</span><b>{{ siteUrl }}user.png</b></div>
          <div class="join-row"><span>Desc</span><b>Code, pixels &amp; curiosity</b></div>
          <button class="join-copy roll-host" type="button" @click="copyInfo"><RollText :key="copied ? 1 : 0" :text="copied ? 'Copied ✓' : 'Copy info'" /></button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendsView',
  data() {
    return {
      blogs: [],
      isLoading: true,
      copied: false,
    };
  },
  async mounted() {
    try {
      const baseUrl = process.env.VUE_APP_API_URL || '';
      const apiRoot = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;
      
      const response = await fetch(`${apiRoot}/blogroll`);
      if (response.ok) {
        this.blogs = await response.json();
      }
    } catch (error) {
      console.error("加载友链数据失败:", error);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    siteUrl() {
      return `${window.location.origin}${process.env.BASE_URL || '/'}`;
    }
  },
  methods: {
    defaultAvatar(name) {
      const initial = (name || 'A').charAt(0).toUpperCase();
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=252d38&color=cacaca&bold=true`;
    },
    onAvatarError(event, name) {
      event.target.src = this.defaultAvatar(name);
    },
    copyInfo() {
      const text = `name: AWAY's Studio\nlink: ${this.siteUrl}\navatar: ${this.siteUrl}user.png\ndesc: Code, pixels & curiosity`;
      navigator.clipboard.writeText(text).then(() => {
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 2000);
      });
    }
  }
};
</script>

<style scoped>
.friends-container {
  padding-top: calc(var(--nav-h) + 24px);
  padding-bottom: 40px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 头部 Header */
.friends-header {
  margin: 20px 0 40px;
}

.friends-eyebrow {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--c-line);
}

.page-title {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 18px;
  margin: 18px 0 14px;
}

.page-title-main {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  font-size: clamp(3.2rem, 8vw, 6.4rem);
  line-height: 0.85;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--c-ink);
}

.page-title-alt {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  line-height: 1;
  color: var(--c-accent);
}

.page-subtitle {
  color: var(--c-ink-2);
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.section-container {
  margin-bottom: 40px;
}

/* 友链卡片网格 */
.friends-grid {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 14px;
}

.friend-card {
  --cut: 16px;
  --line: rgba(242, 240, 233, 0.16);
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 18px;
  text-decoration: none !important;
  transition: transform 0.5s var(--ease-out);
}

/* 切角描边：外层描边色 + 内层底色 */
.friend-card::before,
.friend-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  transition: background 0.4s ease;
}

.friend-card::before {
  background: var(--line);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, var(--cut) 100%, 0 calc(100% - var(--cut)));
}

.friend-card::after {
  background: rgba(17, 17, 14, 0.92);
  clip-path: polygon(1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px), calc(100% - 1px) calc(100% - 1px), calc(var(--cut) + 0.4px) calc(100% - 1px), 1px calc(100% - var(--cut) - 0.4px));
}

.friend-card:hover {
  --line: var(--c-accent);
  transform: translateY(-3px);
}

.friend-card:hover::after {
  background: rgba(30, 20, 10, 0.92);
}

.card-avatar {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-s);
  overflow: hidden;
  border: 1px solid var(--c-line-strong);
  flex-shrink: 0;
  background: var(--c-bg-elev-2);
}

.card-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: none;
  transition: filter 0.4s;
}

.friend-card:hover .card-avatar img {
  filter: none;
}

.card-info {
  flex-grow: 1;
  overflow: hidden;
}

.friend-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-ink);
  margin-bottom: 3px;
  transition: color 0.3s;
}

.friend-card:hover .friend-name {
  color: var(--c-accent);
}

.external-icon {
  width: 13px;
  height: 13px;
  color: var(--c-ink-3);
  transition: color 0.2s ease, transform 0.3s var(--ease-out);
}

.friend-card:hover .external-icon {
  color: var(--c-accent);
  transform: translate(2px, -2px);
}

.friend-desc {
  font-size: 0.82rem;
  color: var(--c-ink-3);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.friend-index {
  align-self: flex-start;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  color: var(--c-ink-3);
}

/* ---------- 申请友链 ---------- */
.join {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 40px;
  align-items: end;
  margin-top: 110px;
  padding-top: 40px;
  border-top: 1px solid var(--c-line);
}

.join-title {
  margin: 0 0 16px;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 0.85;
  color: var(--c-ink);
}

.join-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
}

.join-serif {
  font-family: var(--f-serif);
  font-style: italic;
  color: var(--c-accent);
}

.join-text {
  margin: 0;
  color: var(--c-ink-2);
  font-size: 0.92rem;
  line-height: 1.6;
}

.join-card {
  position: relative;
  padding: 8px 20px 18px;
  border: 1px solid var(--c-line-strong);
  border-radius: 14px;
  background: rgba(17, 17, 14, 0.9);
}

.join-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px dashed var(--c-line-strong);
  font-size: 0.9rem;
}

.join-row span {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  padding-top: 3px;
}

.join-row b {
  font-weight: 700;
  color: var(--c-ink);
  text-align: right;
  word-break: break-all;
}

.join-copy {
  margin-top: 16px;
  height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  background: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}

.join-copy:hover {
  background: var(--c-accent-soft);
  box-shadow: 0 10px 30px var(--c-accent-glow);
}

@media (max-width: 768px) {
  .join {
    grid-template-columns: 1fr;
  }
}

.loading-box {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 16px;
  }

  .friends-grid {
    grid-template-columns: 1fr;
  }
}
</style>
