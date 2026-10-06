<template>
  <header class="site-nav" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <router-link to="/" class="nav-logo" aria-label="AWAY's Studio — Home" @click="close">
      <svg class="wordmark" viewBox="0 0 120 52" aria-hidden="true">
        <text class="wm-top" x="0" y="22" textLength="120" lengthAdjust="spacingAndGlyphs">AWAY'S</text>
        <text class="wm-bottom" x="0" y="50" textLength="120" lengthAdjust="spacingAndGlyphs">STUDIO</text>
      </svg>
    </router-link>

    <router-link to="/" class="nav-mark" aria-label="Home" @click="close">
      <AwayMark :size="46" />
    </router-link>

    <div class="nav-actions">
      <router-link to="/Postlist" class="nav-pill roll-host" @click="close">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
          <path d="M4 5h16M4 12h16M4 19h10" />
        </svg>
        <RollText text="Posts" />
      </router-link>
      <button
        class="nav-menu-btn"
        type="button"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="site-menu"
        :aria-label="open ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggle"
      >
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
      </button>
    </div>

    <!-- 全屏菜单：左侧图片格随悬停的链接上色，右侧大号链接 -->
    <div id="site-menu" class="menu" :aria-hidden="open ? 'false' : 'true'" @pointermove="onMenuPointer">
      <div class="menu-tiles" :style="tilesStyle">
        <div
          v-for="(item, i) in allLinks"
          :key="item.label"
          class="menu-tile"
          :class="{ 'is-lit': activeTile === i }"
          :style="{ '--i': i }"
        >
          <div class="tile-img" :style="item.tileStyle"></div>
          <span class="tile-label">0{{ i + 1 }} — {{ item.label }}</span>
        </div>
      </div>

      <div class="menu-main">
        <nav class="menu-links" @pointerleave="hovered = -1">
          <template v-for="(item, i) in allLinks" :key="item.label">
            <a
              v-if="item.external"
              class="menu-link roll-host"
              :href="item.href"
              target="_blank"
              :style="{ '--i': i }"
              @pointerenter="hovered = i"
              @click="close"
            >
              <span class="menu-label"><RollText :text="item.label" /></span>
              <span class="menu-ext">↗</span>
            </a>
            <router-link
              v-else
              class="menu-link roll-host"
              :class="{ 'is-current': isCurrent(item) }"
              :to="item.to"
              :style="{ '--i': i }"
              @pointerenter="hovered = i"
              @click="close"
            >
              <span class="menu-label"><RollText :text="item.label" /></span>
              <svg v-if="isCurrent(item)" class="menu-strike" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 14 C 30 4, 52 22, 80 12 S 130 2, 160 13 S 190 16, 198 9" />
              </svg>
            </router-link>
          </template>
        </nav>

        <div class="menu-badge">
          <AwayMark :size="38" dot />
          <span>AWAY'S STUDIO<br>SINCE 2025</span>
        </div>
      </div>

      <div class="menu-foot">
        <router-link to="/admin" class="menu-small roll-host" @click="close"><RollText text="Admin / 后台" /></router-link>
        <div class="menu-socials">
          <a class="roll-host" href="https://github.com/AwayC/" target="_blank" rel="noopener noreferrer" @click="close"><RollText text="GitHub" /></a>
          <a class="roll-host" href="https://space.bilibili.com/470833519" target="_blank" rel="noopener noreferrer" @click="close"><RollText text="Bilibili" /></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AwayMark from './AwayMark.vue';

const BASE = process.env.BASE_URL || '/';

// 菜单图片可在 public/menu/tiles.json 里改（图片放 public/menu/）
const TILES_URL = `${BASE}menu/tiles.json`;
const DEFAULT_TILES = {
  Home: { image: 'menu/home.webp', size: '320%', position: '22% 18%' },
  Posts: { image: 'menu/posts.webp', size: '260%', position: '78% 62%' },
  Friends: { image: 'menu/friends.jpg', size: 'cover', position: 'center' },
  Cube: { image: 'menu/cube.webp', size: 'cover', position: 'center' },
};

function tileStyle(t) {
  if (!t || !t.image) return {};
  const src = /^(https?:)?\/\/|^\/|^data:/.test(t.image) ? t.image : BASE + t.image;
  return {
    backgroundImage: `url("${src}")`,
    backgroundSize: t.size || 'cover',
    backgroundPosition: t.position || 'center',
  };
}

export default {
  name: 'NavBar',
  components: { AwayMark },
  data() {
    return {
      open: false,
      scrolled: false,
      hovered: -1,
      tilt: { x: 0, y: 0 },
      tiles: DEFAULT_TILES,
      links: [
        { to: '/', label: 'Home', name: 'home' },
        { to: '/Postlist', label: 'Posts', name: ['Postlist', 'post'] },
        { to: '/friends', label: 'Friends', name: 'friends' },
        { href: './page/cube/index.html', label: 'Cube', external: true },
      ],
    };
  },
  computed: {
    allLinks() {
      return this.links.map((l) => ({ ...l, tileStyle: tileStyle(this.tiles[l.label]) }));
    },
    currentIndex() {
      return this.allLinks.findIndex((l) => this.isCurrent(l));
    },
    activeTile() {
      return this.hovered >= 0 ? this.hovered : this.currentIndex;
    },
    tilesStyle() {
      return { transform: `translate3d(${this.tilt.x * -14}px, ${this.tilt.y * -10}px, 0)` };
    },
  },
  watch: {
    $route() {
      this.close();
    },
    open(val) {
      document.documentElement.classList.toggle('menu-open', val);
      if (!val) this.hovered = -1;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('keydown', this.onKey);
    this.onScroll();
    this.loadTiles();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('keydown', this.onKey);
    document.documentElement.classList.remove('menu-open');
  },
  methods: {
    isCurrent(item) {
      if (!item.name) return false;
      const names = Array.isArray(item.name) ? item.name : [item.name];
      return names.includes(this.$route.name);
    },
    async loadTiles() {
      try {
        const res = await fetch(TILES_URL, { cache: 'no-cache' });
        if (!res.ok) return;
        const conf = await res.json();
        const tiles = { ...DEFAULT_TILES };
        Object.keys(tiles).forEach((k) => {
          if (conf[k] && conf[k].image) tiles[k] = { ...tiles[k], ...conf[k] };
        });
        this.tiles = tiles;
      } catch (e) {
        // 配置读不到就用默认图
      }
    },
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    onScroll() {
      this.scrolled = window.scrollY > 8;
    },
    onKey(e) {
      if (e.key === 'Escape') this.close();
    },
    onMenuPointer(e) {
      this.tilt.x = e.clientX / window.innerWidth - 0.5;
      this.tilt.y = e.clientY / window.innerHeight - 0.5;
    },
  },
};
</script>

<style scoped>
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: var(--nav-h);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 28px;
  pointer-events: none;
}

/* 滚动后加一层从上往下渐隐的暗幕，保证导航可读 */
.site-nav::before {
  content: '';
  position: absolute;
  inset: 0 0 -28px;
  background: linear-gradient(to bottom, rgba(12, 12, 10, 0.92) 0%, rgba(12, 12, 10, 0.65) 55%, rgba(12, 12, 10, 0) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.site-nav.is-scrolled:not(.is-open)::before {
  opacity: 1;
}

.site-nav > * {
  position: relative;
  pointer-events: auto;
}

/* ---------- 字标：上衬线 / 下粗黑体，两行等宽 ---------- */
.nav-logo {
  justify-self: start;
  display: block;
  width: 92px;
  color: var(--c-ink);
  z-index: 2;
  transition: color 0.3s;
}

.wordmark {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  fill: currentColor;
}

.wm-top {
  font-family: var(--f-serif);
  font-size: 27px;
  letter-spacing: 0;
}

.wm-bottom {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 112%;
  font-size: 27px;
}

.nav-logo:hover {
  color: var(--c-accent);
}

/* ---------- 中间徽标 ---------- */
.nav-mark {
  color: var(--c-ink);
  display: flex;
  z-index: 2;
  transition: color 0.3s, transform 0.5s var(--ease-out);
}

.nav-mark:hover {
  color: var(--c-accent);
  transform: translateX(3px) skewX(-6deg);
}

/* ---------- 右侧按钮 ---------- */
.nav-actions {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.nav-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  background: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, transform 0.4s var(--ease-out), box-shadow 0.4s;
}

.nav-pill:hover {
  color: var(--c-accent-ink);
  background: var(--c-accent-soft);
  box-shadow: 0 10px 30px var(--c-accent-glow);
  transform: translateY(-1px);
}

.nav-menu-btn {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid rgba(242, 240, 233, 0.5);
  background: rgba(12, 12, 10, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}

.nav-menu-btn:hover {
  border-color: var(--c-ink);
}

.bar {
  position: absolute;
  height: 2px;
  background: var(--c-ink);
  border-radius: 2px;
  transition: transform 0.5s var(--ease-out), width 0.5s var(--ease-out), top 0.5s var(--ease-out), left 0.5s var(--ease-out), background 0.3s;
}

.bar-1 { top: 16px; left: 21px; width: 11px; }
.bar-2 { top: 24px; left: 11px; width: 21px; }

.nav-menu-btn:hover .bar-1 { left: 11px; width: 21px; }
.nav-menu-btn:hover .bar-2 { width: 11px; }

.is-open .nav-menu-btn {
  background: var(--c-ink);
  border-color: var(--c-ink);
}

.is-open .bar {
  background: var(--c-accent-ink);
}

.is-open .bar-1,
.is-open .nav-menu-btn:hover .bar-1 {
  top: 20px;
  left: 14px;
  width: 15px;
  transform: rotate(45deg);
}

.is-open .bar-2,
.is-open .nav-menu-btn:hover .bar-2 {
  top: 20px;
  left: 14px;
  width: 15px;
  transform: rotate(-45deg);
}

/* ---------- 全屏菜单 ---------- */
.menu {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  padding: calc(var(--nav-h) + 3vh) 28px 24px;
  background: #0f0f0c;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 0.8s var(--ease-out);
  pointer-events: none;
}

.is-open .menu {
  clip-path: inset(0 0 0 0);
  pointer-events: auto;
}

.menu-tiles {
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4vw;
  width: min(100%, 64vh);
  transition: transform 0.9s var(--ease-out);
}

.menu-tile {
  position: relative;
  aspect-ratio: 1 / 1.08;
  overflow: hidden;
  border-radius: 4px;
  background: var(--c-bg-elev);
  opacity: 0;
  transform: translateY(40px) scale(0.96);
  transition: opacity 0.7s var(--ease-out), transform 0.9s var(--ease-out);
}

.is-open .menu-tile {
  opacity: 1;
  transform: none;
  transition-delay: calc(0.15s + var(--i) * 0.07s);
}

.tile-img {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  filter: grayscale(1) contrast(1.05) brightness(0.55);
  transform: scale(1.04);
  transition: filter 0.6s ease, transform 1.2s var(--ease-out);
}

.menu-tile.is-lit .tile-img {
  filter: none;
  transform: scale(1.12);
}

.tile-label {
  position: absolute;
  left: 10px;
  bottom: 9px;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(242, 240, 233, 0.75);
  mix-blend-mode: difference;
}

.menu-main {
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-link {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  color: var(--c-ink);
  text-decoration: none;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.6s var(--ease-out), transform 0.7s var(--ease-out), color 0.25s;
}

.is-open .menu-link {
  opacity: 1;
  transform: none;
  transition-delay: calc(0.2s + var(--i) * 0.06s), calc(0.2s + var(--i) * 0.06s), 0s;
}

.menu-label {
  font-family: var(--f-sans);
  font-weight: 800;
  font-stretch: 100%;
  text-transform: uppercase;
  font-size: clamp(2.6rem, 8.4vh, 6rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
}

.menu-label :deep(.roll-c) {
  line-height: 0.95;
  height: 0.95em;
}

.menu-ext {
  font-size: 1.4rem;
  margin-top: 0.4em;
  color: var(--c-ink-3);
}

.menu-link:hover {
  color: var(--c-accent);
}

.menu-link.is-current .menu-label {
  color: var(--c-ink-3);
}

.menu-strike {
  position: absolute;
  left: -6%;
  width: 112%;
  top: 38%;
  height: 0.5em;
  overflow: visible;
}

.menu-strike path {
  fill: none;
  stroke: var(--c-accent);
  stroke-width: 4;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
}

.is-open .menu-strike path {
  transition: stroke-dashoffset 0.9s var(--ease-out) 0.6s;
  stroke-dashoffset: 0;
}

.menu-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--c-ink-3);
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.is-open .menu-badge {
  opacity: 1;
  transition-delay: 0.55s;
}

.menu-foot {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-family: var(--f-sans);
  font-weight: 700;
  font-size: 0.76rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.is-open .menu-foot {
  opacity: 1;
  transition-delay: 0.5s;
}

.menu-socials {
  display: flex;
  gap: 22px;
}

.menu-foot a {
  color: var(--c-ink);
  text-decoration: none;
  transition: color 0.25s;
}

.menu-foot a:hover {
  color: var(--c-accent);
}

.menu-small {
  color: var(--c-ink-3) !important;
}

@media (max-width: 900px) {
  .menu {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

  .menu-tiles {
    display: none;
  }
}

@media (max-width: 640px) {
  .site-nav {
    padding: 0 16px;
    grid-template-columns: 1fr auto;
  }

  .nav-mark {
    display: none;
  }

  .nav-pill {
    height: 40px;
    padding: 0 14px;
  }

  .nav-menu-btn {
    width: 40px;
    height: 40px;
  }

  .menu {
    padding: calc(var(--nav-h) + 2vh) 16px 20px;
  }

  .menu-label {
    font-size: clamp(2.4rem, 13vw, 4rem);
  }
}
</style>
