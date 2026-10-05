<template>
  <div class="card info-card-wrapper">
    <div class="card-body">
      <div class="card-eyebrow">
        <span>Driver profile</span>
        <span class="card-eyebrow-num">N°01</span>
      </div>

      <!-- 动态在线状态与头像 -->
      <div class="avatar-section">
        <div class="avatar-frame">
          <img
            src="../assets/Away.jpg"
            alt="avatar"
            class="avatar-img"
          />
          <span class="online-indicator" title="Online"></span>
        </div>
      </div>

      <!-- 名字与身份标签 -->
      <div class="profile-header">
        <h2 class="profile-name">{{ profile.name || 'AWAY' }}</h2>
        <span class="role-badge">CREATIVE DEVELOPER</span>
      </div>

      <!-- 格言与简介 -->
      <div class="motto-container">
        <p v-for="(m, i) in profile.mottos" :key="i" class="bio-text">
          <span class="quote-mark">“</span>{{ m }}<span class="quote-mark">”</span>
        </p>
      </div>

      <!-- 分隔线 -->
      <div class="card-divider"></div>

      <!-- 社交媒体链接 (严格并排一行显示) -->
      <div class="social-grid">
        <a
          v-if="profile.github"
          :href="'https://github.com/' + profile.github + '/'"
          class="social-pill github-pill"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          <span>{{ profile.github }}</span>
        </a>
        
        <a
          v-if="profile.bilibili && profile.bilibili.uid"
          :href="'https://space.bilibili.com/' + profile.bilibili.uid"
          class="social-pill bilibili-pill"
          target="_blank"
          rel="noopener noreferrer"
          title="Bilibili"
        >
          <svg class="icon" width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path>
          </svg>
          <span>{{ profile.bilibili.text || 'Bilibili' }}</span>
        </a>
      </div>

      <!-- 独立友链页面入口 -->
      <div class="friends-action">
        <router-link to="/friends" class="friends-link-btn roll-host">
          <svg class="link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <RollText text="Friends / 友情链接" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoCard',
  data() {
    return {
      profile: { name: '', mottos: [], github: '', bilibili: { uid: '', text: '' } },
    };
  },
  async mounted() {
    try {
      const baseUrl = process.env.VUE_APP_API_URL || '';
      const apiRoot = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;

      const profileRes = await fetch(`${apiRoot}/profile`);
      if (profileRes.ok) this.profile = await profileRes.json();
    } catch (error) {
      console.error("加载名片数据失败:", error);
    }
  }
}
</script>

<style scoped>
/* 原站 “NEXT RACE” 小卡片的造型：细描边 + 右上切角 + 虚线分隔 */
.info-card-wrapper {
  --cut: 22px;
  position: relative;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--c-ink);
  text-align: left;
}

.info-card-wrapper::before,
.info-card-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: background 0.4s ease;
}

.info-card-wrapper::before {
  background: rgba(242, 240, 233, 0.18);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

.info-card-wrapper::after {
  background: rgba(17, 17, 14, 0.92);
  clip-path: polygon(1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px), calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px));
}

.info-card-wrapper:hover::before {
  background: var(--c-accent);
}

.card-body {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 76px 1fr;
  grid-template-areas:
    "eyebrow eyebrow"
    "avatar header"
    "motto motto"
    "divider divider"
    "social social"
    "friends friends";
  column-gap: 14px;
  padding: 14px 16px 16px;
}

.card-eyebrow {
  grid-area: eyebrow;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 14px;
  border-bottom: 1px dashed var(--c-line-strong);
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.card-eyebrow-num {
  color: var(--c-accent);
  margin-right: 14px;
}

.avatar-section {
  grid-area: avatar;
  position: relative;
}

.avatar-frame {
  position: relative;
  width: 76px;
  height: 76px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--c-line-strong);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.5s ease;
}

.info-card-wrapper:hover .avatar-img {
  filter: none;
}

.online-indicator {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--c-accent);
  box-shadow: 0 0 10px var(--c-accent);
}

.profile-header {
  grid-area: header;
  align-self: end;
}

.profile-name {
  font-family: var(--f-sans);
  font-size: 2rem;
  font-weight: 900;
  font-stretch: 120%;
  letter-spacing: -0.03em;
  line-height: 0.85;
  text-transform: uppercase;
  color: var(--c-ink);
  margin: 0 0 8px 0;
}

.role-badge {
  display: inline-block;
  font-family: var(--f-mono);
  font-size: 0.56rem;
  letter-spacing: 0.14em;
  color: var(--c-accent-ink);
  padding: 4px 6px 3px;
  border-radius: 4px;
  background: var(--c-accent);
}

.motto-container {
  grid-area: motto;
  margin-top: 14px;
}

.bio-text {
  font-family: var(--f-serif);
  font-style: italic;
  color: var(--c-ink-2);
  font-size: 1.05rem;
  line-height: 1.25;
  margin: 0 0 4px 0;
}

.quote-mark {
  color: var(--c-accent);
  margin: 0 1px;
}

.card-divider {
  grid-area: divider;
  height: 0;
  border-top: 1px dashed var(--c-line-strong);
  margin: 12px 0;
}

.social-grid {
  grid-area: social;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
  margin-bottom: 8px;
}

.social-pill {
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 32px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
  font-size: 0.74rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none !important;
  transition: all 0.25s ease;
}

.social-pill:hover {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.friends-action {
  grid-area: friends;
}

.friends-link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 36px;
  border-radius: 8px;
  background: var(--c-accent);
  color: var(--c-accent-ink);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.friends-link-btn:hover {
  background: var(--c-accent-soft);
  color: var(--c-accent-ink);
  box-shadow: 0 8px 24px var(--c-accent-glow);
}

.link-icon {
  transition: transform 0.25s ease;
}

.friends-link-btn:hover .link-icon {
  transform: rotate(12deg);
}
</style>
