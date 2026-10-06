<template>
  <footer class="main-footer" ref="root" :class="{ 'is-inview': inView }">
    <div class="footer-panel">
      <div class="footer-statement">
        <svg class="footer-scribble" viewBox="0 0 260 60" aria-hidden="true">
          <path d="M6 44 C 30 10, 52 8, 58 30 S 70 58, 92 30 S 120 4, 140 26 S 168 54, 196 22 S 236 10, 254 18" />
        </svg>
        <h2 class="statement" v-high>
          <span class="st-row"><span class="st-sans">KEEP</span> <span class="st-serif">pushing</span></span>
          <span class="st-row"><span class="st-sans">FLAT</span> <span class="st-serif">out</span><span class="st-dot">.</span></span>
        </h2>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <span class="ui-eyebrow" v-high>Pages</span>
          <router-link class="roll-host" to="/"><RollText text="Home" /></router-link>
          <router-link class="roll-host" to="/Postlist"><RollText text="Posts" /></router-link>
          <router-link class="roll-host" to="/friends"><RollText text="Friends" /></router-link>
        </div>
        <div class="footer-col">
          <span class="ui-eyebrow" v-high="{ delay: 100 }">Follow on</span>
          <a class="roll-host" href="https://github.com/AwayC/" target="_blank" rel="noopener noreferrer"><RollText text="GitHub" /></a>
          <a class="roll-host" href="https://space.bilibili.com/470833519" target="_blank" rel="noopener noreferrer"><RollText text="Bilibili" /></a>
        </div>
        <div class="footer-col footer-col-mark">
          <AwayMark :size="64" dot />
          <button class="back-top roll-host" type="button" @click="toTop">
            <RollText text="Back to top" />
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © 2025 powered by <span class="brand">AWAY</span>
        </div>
        <div class="filing">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            浙ICP备2026012504号
          </a>
          <span class="separator">/</span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33019202002917" rel="noreferrer" target="_blank">
            <img src="../assets/beian.png" alt="icon" class="beian-icon" v-if="hasIcon">
            浙公网安备33019202002917号
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AwayMark from './AwayMark.vue';

export default {
  name: "MainFooter",
  components: { AwayMark },
  data() {
    return {
      hasIcon: true, // 假设 assets 下有 beian.png
      inView: false,
    }
  },
  mounted() {
    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.inView = true;
        this.io.disconnect();
      }
    }, { threshold: 0.25 });
    this.io.observe(this.$refs.root);
  },
  beforeUnmount() {
    if (this.io) this.io.disconnect();
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.main-footer {
  position: relative;
  width: 100%;
  margin-top: 120px;
  padding: 0 12px 12px;
  color: var(--c-ink-3);
  --tab-w: min(46vw, 620px);
  --tab-h: 46px;
}

/* 带“文件夹标签”的面板 */
.footer-panel {
  position: relative;
  padding: calc(var(--tab-h) + 56px) 40px 26px;
  background: #15150f;
  border-radius: 0 0 22px 22px;
  clip-path: polygon(
    0 var(--tab-h),
    calc(100% - var(--tab-w) - var(--tab-h)) var(--tab-h),
    calc(100% - var(--tab-w)) 0,
    100% 0,
    100% 100%,
    0 100%
  );
  overflow: hidden;
}

.footer-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 70% at 85% 30%, rgba(255, 128, 0, 0.12), transparent 70%);
  pointer-events: none;
}

.footer-statement {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 72px;
}

.statement {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.86;
  color: var(--c-ink);
  font-size: clamp(3rem, 8.5vw, 8.4rem);
}

.st-row {
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
}

.st-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.st-serif {
  font-family: var(--f-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--c-accent);
  letter-spacing: -0.01em;
}

.st-dot {
  font-family: var(--f-sans);
  font-weight: 800;
  color: var(--c-ink);
}

.footer-scribble {
  position: absolute;
  right: 22%;
  top: -40px;
  width: clamp(140px, 18vw, 260px);
  overflow: visible;
  z-index: 1;
}

.footer-scribble path {
  fill: none;
  stroke: var(--c-accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  transition: stroke-dashoffset 1.6s var(--ease-out) 0.4s;
}

.is-inview .footer-scribble path {
  stroke-dashoffset: 0;
}

.footer-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 220px)) 1fr;
  gap: 32px;
  padding-top: 26px;
  border-top: 1px solid var(--c-line);
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-col .ui-eyebrow {
  margin-bottom: 10px;
}

.footer-col a {
  width: fit-content;
  color: var(--c-ink);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  line-height: 1.15;
  transition: color 0.25s, transform 0.4s var(--ease-out);
}

.footer-col a:hover {
  color: var(--c-accent);
  transform: translateX(6px);
}

.footer-col-mark {
  align-items: flex-end;
  justify-content: space-between;
  color: var(--c-ink);
}

.back-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  background: transparent;
  color: var(--c-ink-2);
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
}

.back-top:hover {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.footer-bottom {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
  padding-top: 18px;
  border-top: 1px solid var(--c-line);
  font-family: var(--f-mono);
  font-size: 0.7rem;
}

.brand {
  color: var(--c-accent);
  font-weight: 500;
}

.filing a {
  color: var(--c-ink-3);
  text-decoration: none;
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.filing a:hover {
  color: var(--c-ink);
}

.beian-icon {
  width: 14px;
  height: 14px;
}

.separator {
  margin: 0 12px;
  color: var(--c-line-strong);
}

@media (max-width: 768px) {
  .main-footer {
    --tab-w: 52vw;
    --tab-h: 32px;
    padding: 0 8px 8px;
  }

  .footer-panel {
    padding: calc(var(--tab-h) + 36px) 20px 20px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-col-mark {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .filing {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .separator {
    display: none;
  }
}
</style>
