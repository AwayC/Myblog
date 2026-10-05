<template>
  <div
    class="home"
    ref="home"
    :class="{ 'is-ready': ready, 'is-disco': disco }"
    @pointermove="onPointerMove"
  >
    <!-- 背后的巨型字标：平时隐在暗处，被鼠标的“光”照亮 -->
    <div class="wordmark" aria-hidden="true">
      <div class="wordmark-half wordmark-left">
        <span class="wm-base">AW</span>
        <span class="wm-lit" ref="litL">AW</span>
      </div>
      <div class="wordmark-gap"></div>
      <div class="wordmark-half wordmark-right">
        <span class="wm-base">AY</span>
        <span class="wm-lit" ref="litR">AY</span>
      </div>
    </div>

    <!-- 3D 头盔 -->
    <HelmetStage
      class="home-stage"
      livery="dark"
      :fill="stageFill"
      :offset-y="stageOffset"
      :mini-target="miniEl"
      disco-egg
      @disco="disco = $event"
    />

    <!-- 底部 -->
    <div class="home-ui">
      <!-- 点击左下角的线框头盔，切换原站的 disco 头盔 -->
      <button
        type="button"
        class="mini"
        :aria-pressed="disco ? 'true' : 'false'"
        :aria-label="disco ? 'Switch back to the orange livery' : 'Switch to the disco helmet'"
        @click="toggleDisco"
      >
        <span class="mini-head">
          <span>{{ disco ? 'Disco' : 'Livery' }}</span>
          <span class="mini-year">{{ disco ? 'On' : '2025' }}</span>
        </span>
        <span class="mini-view" ref="mini"></span>
        <span class="mini-foot">
          <span class="mini-cta">{{ disco ? 'Back to orange' : 'Click · disco' }}</span>
          <span>N°01</span>
        </span>
      </button>

      <div class="caption">
        <h1 class="caption-title">
          <span class="cap-row">Code, pixels</span>
          <span class="cap-row ui-serif">&amp; curiosity</span>
        </h1>
      </div>

      <div class="home-actions">
        <span class="home-hint">Move to light</span>
        <router-link to="/Postlist" class="enter-btn roll-host">
          <RollText text="Enter blog" />
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

// three.js 体积较大，只在需要 3D 头盔的页面按需加载
const HelmetStage = defineAsyncComponent(() => import(/* webpackChunkName: "helmet" */ '@/components/HelmetStage.vue'));

export default {
  name: 'HomeView',
  components: {
    HelmetStage,
  },
  data() {
    return {
      ready: false,
      disco: false,
      portrait: false,
      miniEl: null,
    };
  },
  computed: {
    stageFill() {
      return this.portrait ? 0.32 : 0.48;
    },
    stageOffset() {
      return this.portrait ? 0.04 : 0.02;
    },
  },
  mounted() {
    this.miniEl = this.$refs.mini;
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('away:reveal', this.onReveal);
    if (!document.documentElement.classList.contains('is-covered')) this.onReveal();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('away:reveal', this.onReveal);
  },
  methods: {
    onReveal() {
      this.ready = true;
    },
    toggleDisco() {
      window.dispatchEvent(new CustomEvent('away:disco-toggle'));
    },
    onResize() {
      this.portrait = window.innerWidth / window.innerHeight < 0.85;
    },
    onPointerMove(e) {
      // 光斑中心换算到每个字块自己的坐标系
      [this.$refs.litL, this.$refs.litR].forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--hx', `${e.clientX - r.left}px`);
        el.style.setProperty('--hy', `${e.clientY - r.top}px`);
      });
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  height: 100svh;
  min-height: 560px;
  width: 100%;
  overflow: hidden;
}

/* ---------- 巨型字标 ---------- */
.wordmark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  pointer-events: none;
  user-select: none;
}

.wordmark-half {
  position: relative;
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  /* 两个字块 + 中间留给头盔的空隙要放得下一屏 */
  font-size: min(calc((100vw - 40vh) / 3.8), 40vh);
  line-height: 0.8;
  letter-spacing: -0.04em;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 1.6s var(--ease-out) 1.2s, transform 1.6s var(--ease-out) 1.2s;
}

.is-ready .wordmark-half {
  opacity: 1;
  transform: none;
}

.wordmark-gap {
  flex: 0 0 40vh;
}

.wm-base,
.wm-lit {
  display: block;
}

.wm-base {
  color: #11110e;
  /* 可变字体的字形轮廓互相重叠，text-stroke 会把每一段都描出来（横杠处出现断开的线）。
     改用四向 1px 投影拼出整体外轮廓，字母是一个完整的形状。 */
  filter:
    drop-shadow(1px 0 0 rgba(242, 240, 233, 0.07))
    drop-shadow(-1px 0 0 rgba(242, 240, 233, 0.07))
    drop-shadow(0 1px 0 rgba(242, 240, 233, 0.07))
    drop-shadow(0 -1px 0 rgba(242, 240, 233, 0.07));
}

/* 被光照亮的那一层：用光标位置做径向遮罩 */
.wm-lit {
  position: absolute;
  inset: 0;
  color: transparent;
  --hx: -100vw;
  --hy: -100vh;
  background: radial-gradient(circle 20vmax at var(--hx) var(--hy), #ff8a1a 0%, #b34f00 35%, rgba(90, 40, 0, 0) 75%);
  -webkit-background-clip: text;
  background-clip: text;
}

.is-disco .wm-lit {
  background: radial-gradient(circle 30vmax at var(--hx) var(--hy), #ff3d9a 0%, #7c4dff 35%, rgba(0, 200, 255, 0.15) 75%);
  -webkit-background-clip: text;
  background-clip: text;
  animation: home-hue 3s linear infinite;
}

@keyframes home-hue {
  to { filter: hue-rotate(360deg); }
}

.home-stage {
  z-index: 1;
}

/* ---------- 底部 ---------- */
.home-ui {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 24px;
  padding: 0 28px 28px;
}

.home-ui > * {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 1.2s var(--ease-out), transform 1.2s var(--ease-out);
}

.is-ready .home-ui > * {
  opacity: 1;
  transform: none;
}

.is-ready .home-ui > :nth-child(1) { transition-delay: 2.2s; }
.is-ready .home-ui > :nth-child(2) { transition-delay: 1.9s; }
.is-ready .home-ui > :nth-child(3) { transition-delay: 2.4s; }

/* 左下：线框头盔（three.js 直接画进 .mini-view 的区域） */
.mini {
  justify-self: start;
  display: block;
  width: 150px;
  padding: 0;
  border: 0;
  background: none;
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: left;
  color: var(--c-ink-3);
  cursor: pointer;
}

.mini-head,
.mini-foot {
  display: flex;
  justify-content: space-between;
}

.mini-cta {
  transition: color 0.3s;
}

.mini:hover .mini-cta,
.mini:focus-visible .mini-cta {
  color: var(--c-ink);
}

.mini:focus-visible {
  outline: 1px solid var(--c-accent);
  outline-offset: 6px;
}

.mini-year {
  color: var(--c-accent);
}

.mini-view {
  display: block;
  height: 112px;
  margin: 4px 0;
  transition: background-size 0.4s var(--ease-out);
  background:
    linear-gradient(var(--c-line-strong), var(--c-line-strong)) left top / 10px 1px no-repeat,
    linear-gradient(var(--c-line-strong), var(--c-line-strong)) left top / 1px 10px no-repeat,
    linear-gradient(var(--c-line-strong), var(--c-line-strong)) right bottom / 10px 1px no-repeat,
    linear-gradient(var(--c-line-strong), var(--c-line-strong)) right bottom / 1px 10px no-repeat;
}

/* 悬停时四角的取景框拉长，提示可以点击 */
.mini:hover .mini-view {
  background-size: 22px 1px, 1px 22px, 22px 1px, 1px 22px;
}

.is-disco .mini-year {
  color: #ff4fd8;
}

.caption {
  text-align: center;
}

.caption-title {
  margin: 0;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: clamp(1.3rem, 2.3vw, 2rem);
  letter-spacing: -0.02em;
  line-height: 0.95;
  text-transform: uppercase;
  color: var(--c-ink);
}

.cap-row {
  display: block;
}

.caption-title .ui-serif {
  text-transform: none;
  color: var(--c-accent);
  font-size: 1.12em;
}

.home-actions {
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.home-hint {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.enter-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 46px;
  padding: 0 18px 0 20px;
  border-radius: 10px;
  background: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 800;
  font-size: 0.84rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out), background 0.3s;
  pointer-events: auto;
}

.enter-btn:hover {
  color: var(--c-accent-ink);
  background: var(--c-accent-soft);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px var(--c-accent-glow);
}

.enter-btn svg {
  transition: transform 0.4s var(--ease-out);
}

.enter-btn:hover svg {
  transform: rotate(45deg);
}

/* ---------- 响应式 ---------- */
@media (max-aspect-ratio: 85/100) {
  .wordmark {
    flex-direction: column;
  }

  .wordmark-half {
    font-size: 34vw;
  }

  .wordmark-gap {
    flex: 0 0 36vh;
  }
}

@media (max-width: 720px) {
  .home-ui {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 14px;
    padding: 0 16px 22px;
  }

  .mini,
  .home-hint {
    display: none;
  }

  .home-actions {
    justify-self: center;
    align-items: center;
  }
}

@media (hover: none) {
  .wm-lit {
    background: radial-gradient(circle 40vmax at 50% 30%, #ff8a1a 0%, #b34f00 30%, rgba(90, 40, 0, 0) 70%);
    -webkit-background-clip: text;
    background-clip: text;
    opacity: 0.45;
  }
}
</style>
