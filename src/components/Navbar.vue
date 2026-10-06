<template>
  <header class="site-nav" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <router-link to="/" class="nav-logo" aria-label="AWAY's Studio — Home" @click="close">
      <svg class="wordmark" viewBox="0 0 120 52" aria-hidden="true">
        <text class="wm-top" x="0" y="22" textLength="120" lengthAdjust="spacingAndGlyphs">AWAY'S</text>
        <text class="wm-bottom" x="0" y="50" textLength="120" lengthAdjust="spacingAndGlyphs">STUDIO</text>
      </svg>
    </router-link>

    <router-link to="/" class="nav-mark" ref="mark" aria-label="Home" @click="close">
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

    <!-- 全屏菜单（复刻原站）：椭圆裁切从顶部展开，图片和链接依次跟进；关闭时整条时间线 1.5 倍速倒放 -->
    <div id="site-menu" ref="menu" class="menu" :aria-hidden="open ? 'false' : 'true'" @pointermove="onMenuPointer">
      <!-- 两列图片：列容器随鼠标上下反向错开，列里的图片各自做出场动画 -->
      <div class="menu-tiles" ref="tiles">
        <div v-for="(col, c) in tileColumns" :key="c" class="menu-col">
          <div
            v-for="{ item, i } in col"
            :key="item.label"
            class="menu-tile"
            :class="{ 'is-lit': activeTile === i }"
            :data-i="i"
          >
            <div class="tile-img" :style="item.tileStyle"></div>
            <!-- 上色层：悬停的 1，当前页 0.5，其余 0 -->
            <div class="tile-img tile-top" :style="[item.tileStyle, { opacity: tileOpacity(i) }]"></div>
            <span class="tile-label menu-hl">0{{ i + 1 }} — {{ item.label }}<i class="hl-block"></i></span>
          </div>
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
          <span class="menu-hl">AWAY'S STUDIO<br>SINCE 2025<i class="hl-block"></i></span>
        </div>
      </div>

      <div class="menu-foot">
        <router-link to="/admin" class="menu-small menu-hl roll-host" @click="close"><RollText text="Admin / 后台" /><i class="hl-block"></i></router-link>
        <div class="menu-socials">
          <a class="menu-hl roll-host" href="https://github.com/AwayC/" target="_blank" rel="noopener noreferrer" @click="close"><RollText text="GitHub" /><i class="hl-block"></i></a>
          <a class="menu-hl roll-host" href="https://space.bilibili.com/470833519" target="_blank" rel="noopener noreferrer" @click="close"><RollText text="Bilibili" /><i class="hl-block"></i></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import gsap from 'gsap';
import AwayMark from './AwayMark.vue';

const BASE = process.env.BASE_URL || '/';

// 菜单图片可在 public/menu/tiles.json 里改（图片放 public/menu/）
const TILES_URL = `${BASE}menu/tiles.json`;
const DEFAULT_TILES = {
  Home: { image: 'menu/home.webp', size: '320%', position: '22% 18%' },
  Posts: { image: 'menu/posts.png', size: 'cover', position: 'center' },
  Friends: { image: 'menu/friends.jpg', size: 'cover', position: 'center' },
  Cube: { image: 'menu/cube.webp', size: 'cover', position: 'center' },
};

// 删除线用了 non-scaling-stroke，虚线按屏幕像素计算，
// 所以要按 SVG 被拉伸后的实际长度来算，而不是 getTotalLength() 的视图框长度
function strikeLength(path) {
  const svg = path.ownerSVGElement;
  const box = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  const sx = box.width / vb.width;
  const sy = box.height / vb.height;
  const total = path.getTotalLength();
  let len = 0;
  let prev = path.getPointAtLength(0);
  for (let i = 1; i <= 64; i++) {
    const pt = path.getPointAtLength((total * i) / 64);
    len += Math.hypot((pt.x - prev.x) * sx, (pt.y - prev.y) * sy);
    prev = pt;
  }
  return Math.ceil(len) + 4;
}

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
      tiles: null, // 等 tiles.json 读到再出图，免得先请求默认图
      links: [
        { to: '/', label: 'Home', name: 'home' },
        { to: '/Postlist', label: 'Posts', name: ['Postlist', 'post'] },
        { to: '/friends', label: 'Friends', name: 'friends' },
        { href: './page/cube/index.html', label: 'Cube', external: true },
      ],
    };
  },
  computed: {
    // 按阅读顺序分到左右两列：0 2 / 1 3
    tileColumns() {
      const cols = [[], []];
      this.allLinks.forEach((item, i) => cols[i % 2].push({ item, i }));
      return cols;
    },
    allLinks() {
      return this.links.map((l) => ({ ...l, tileStyle: tileStyle(this.tiles && this.tiles[l.label]) }));
    },
    currentIndex() {
      return this.allLinks.findIndex((l) => this.isCurrent(l));
    },
    activeTile() {
      return this.hovered >= 0 ? this.hovered : this.currentIndex;
    },
  },
  watch: {
    $route() {
      this.close();
    },
    open(val) {
      document.documentElement.classList.toggle('menu-open', val);
      if (val) this.playOpen();
      else {
        this.hovered = -1;
        this.playClose();
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('keydown', this.onKey);
    this.onScroll();
    this.loadTiles();
    this.buildMenuTimeline();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('keydown', this.onKey);
    this.lockScroll(false);
    if (this.menuTl) this.menuTl.kill();
    document.documentElement.classList.remove('menu-open');
  },
  methods: {
    isCurrent(item) {
      if (!item.name) return false;
      const names = Array.isArray(item.name) ? item.name : [item.name];
      return names.includes(this.$route.name);
    },
    async loadTiles() {
      const tiles = { ...DEFAULT_TILES };
      try {
        const res = await fetch(TILES_URL, { cache: 'no-cache' });
        if (res.ok) {
          const conf = await res.json();
          Object.keys(tiles).forEach((k) => {
            if (conf[k] && conf[k].image) tiles[k] = { ...tiles[k], ...conf[k] };
          });
        }
      } catch (e) {
        // 配置读不到就用默认图
      }
      this.tiles = tiles;
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
    tileOpacity(i) {
      if (this.hovered >= 0) return this.hovered === i ? 1 : 0;
      return this.currentIndex === i ? 0.5 : 0;
    },
    // 与原站同一套参数（lando-by-OFF+BRAND 的导航时间线）
    buildMenuTimeline() {
      const { menu, tiles } = this.$refs;
      // 出场顺序按链接顺序，而不是 DOM 里的列顺序
      const tileEls = [...tiles.querySelectorAll('.menu-tile')].sort((a, b) => a.dataset.i - b.dataset.i);
      const links = menu.querySelectorAll('.menu-link');
      const hls = menu.querySelectorAll('.menu-hl');
      const blocks = menu.querySelectorAll('.hl-block');
      const shown = 'ellipse(120% 100% at 50% 20%)';

      gsap.set(menu, { clipPath: 'ellipse(120% 0% at 50% 0%)', display: 'none' });
      gsap.set(tileEls, { clipPath: 'ellipse(120% 0% at 50% 0%)', y: 25 });
      gsap.set(links, { clipPath: 'ellipse(30% 0% at 50% 0%)', y: 20 });
      gsap.set(hls, { clipPath: 'inset(0 100% 0 0)', y: 15 });
      gsap.set(blocks, { scaleX: 1 });

      this.menuTl = gsap.timeline({
        paused: true,
        onStart: () => gsap.set(menu, { display: 'grid' }),
        onReverseComplete: () => {
          gsap.set(menu, { display: 'none' });
          gsap.to(tiles.querySelectorAll('.menu-col'), { y: 0, duration: 0.3, ease: 'power2.inOut' });
        },
      })
        .to(menu, { clipPath: shown, duration: 0.8, ease: 'power3.out' }, 0)
        .to(tileEls, { clipPath: shown, y: 0, duration: 0.8, stagger: 0.06, ease: 'power3.out' }, 0.15)
        .to(links, { clipPath: shown, y: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.2)' }, 0.35)
        .to(hls, { clipPath: 'inset(0 0% 0 0)', y: 0, duration: 0.7, stagger: 0.04, ease: 'back.out(1.1)' }, 0.5)
        .to(blocks, { scaleX: 0, duration: 0.6, stagger: 0.05, ease: 'power2.inOut' }, 0.7);
    },
    playOpen() {
      this.lockScroll(true);
      gsap.set(this.$refs.menu, { display: 'grid' });
      this.menuTl.timeScale(1).play();
      gsap.to(this.$refs.mark.$el, { opacity: 0, duration: 0.4, ease: 'power2.out' });
      // 当前页的波浪删除线：在链接出现后画出来（与原站一样 0.4s 起、0.6s 画完）
      this.$nextTick(() => {
        const path = this.$refs.menu.querySelector('.menu-strike path');
        if (!path) return;
        const len = strikeLength(path);
        gsap.killTweensOf(path);
        gsap.fromTo(
          path,
          { opacity: 1, strokeDasharray: `${len} ${len}`, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 0.6, delay: 0.4, ease: 'power2.inOut' },
        );
      });
    },
    playClose() {
      this.lockScroll(false);
      this.menuTl.timeScale(1.5).reverse();
      gsap.to(this.$refs.mark.$el, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      // 删除线从末端收回；点了别的页面时，新出现的删除线保持隐藏（CSS 默认透明）
      const path = this.$refs.menu.querySelector('.menu-strike path');
      if (path && path.style.opacity === '1') {
        const len = strikeLength(path);
        gsap.killTweensOf(path);
        gsap.to(path, { strokeDashoffset: len, duration: 0.3, ease: 'power2.in', onComplete: () => gsap.set(path, { opacity: 0 }) });
      }
    },
    // 只拦截滚动输入、不隐藏滚动条，页面宽度不会跳（原站是暂停 Lenis）
    lockScroll(on) {
      if (on === !!this.scrollLocked) return;
      this.scrollLocked = on;
      const method = on ? 'addEventListener' : 'removeEventListener';
      window[method]('wheel', this.blockScroll, { passive: false });
      window[method]('touchmove', this.blockScroll, { passive: false });
      window[method]('keydown', this.blockScrollKeys);
    },
    blockScroll(e) {
      e.preventDefault();
    },
    blockScrollKeys(e) {
      const keys = [' ', 'PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown'];
      if (keys.includes(e.key) && !/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) e.preventDefault();
    },
    // 两列图片随鼠标上下反向错开
    onMenuPointer(e) {
      const d = (e.clientY / window.innerHeight - 0.5) * 2 * 3;
      const [a, b] = this.$refs.tiles.querySelectorAll('.menu-col');
      gsap.to(a, { y: `${-d}rem`, duration: 2, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(b, { y: `${d}rem`, duration: 2, ease: 'power2.out', overwrite: 'auto' });
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
  overflow: hidden;
  cursor: pointer;
  transition: background 0.3s, border-color 0.75s cubic-bezier(0.65, 0.05, 0, 1);
}

/* 悬停：和原站一样，色块从顶部以弧形涌下铺满，移开时向上收回 */
.nav-menu-btn::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: var(--c-accent);
  clip-path: ellipse(120% 0% at 50% 0%);
  transition: clip-path 0.55s cubic-bezier(0.65, 0.05, 0, 1);
}

.nav-menu-btn:hover::before,
.nav-menu-btn:focus-visible::before {
  clip-path: ellipse(150% 160% at 50% 0%);
}

.nav-menu-btn:hover {
  border-color: var(--c-accent);
}

.nav-menu-btn:hover .bar {
  background: var(--c-accent-ink);
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

.is-open .nav-menu-btn:hover {
  border-color: var(--c-accent);
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
}

.menu-tiles {
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4vw;
  width: min(100%, 64vh);
}

.menu-col {
  display: flex;
  flex-direction: column;
  gap: 2.4vw;
  will-change: transform;
}

.menu-tile {
  position: relative;
  aspect-ratio: 1 / 1.08;
  overflow: hidden;
  border-radius: 4px;
  background: var(--c-bg-elev);
}

.tile-img {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  filter: grayscale(1) contrast(1.05) brightness(0.55);
  transform: scale(1.04);
  transition: transform 1.2s var(--ease-out);
}

.tile-top {
  filter: none;
  transition: opacity 0.25s ease, transform 1.2s var(--ease-out);
}

.menu-tile.is-lit .tile-img {
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
  transition: color 0.25s;
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
  opacity: 0; /* 由打开菜单的动画画出来 */
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
}

/* 小字：原站的色块刷出 */
.menu-hl:not(.tile-label) {
  position: relative;
  display: inline-block;
}

.hl-block {
  position: absolute;
  inset: 0;
  z-index: 5;
  background: var(--c-accent);
  transform-origin: right center;
  pointer-events: none;
}

.menu-foot {
  position: relative;
  z-index: 2; /* 图片列上下错开时不压住底部链接 */
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
