<template>
  <div class="curtain" ref="root" aria-hidden="true">
    <div class="curtain-cols">
      <span v-for="i in cols" :key="i" class="curtain-col" ref="col">
        <i class="col-step"></i>
      </span>
    </div>

    <div class="curtain-center" ref="center">
      <AwayMark class="curtain-mark" :size="92" dot :draw="drawKey > 0" :key="drawKey" />
      <div class="curtain-label">{{ label }}</div>
    </div>

    <div class="curtain-foot" ref="foot">
      <span>{{ footLeft }}</span>
      <span class="curtain-count">{{ String(Math.round(progress)).padStart(3, '0') }}</span>
      <span>{{ footRight }}</span>
    </div>
  </div>
</template>

<script>
// 首次加载的幕布 + 路由切换转场。
// 橙色竖条从下往上拉起盖住页面 → 新页面就绪 → 竖条继续向上离场。
import gsap from 'gsap';
import AwayMark from './AwayMark.vue';
import { registerCurtain } from '@/transition';

const COLS = 7;
// 竖条上下各挂着 18px 的台阶装饰：移出屏幕时要多走这段距离，否则会在屏幕边缘留下一截“头”
const STEP = 24;

export default {
  name: 'TransitionCurtain',
  components: { AwayMark },
  data() {
    return {
      cols: COLS,
      progress: 0,
      drawKey: 1,
      label: 'Loading',
      footLeft: "AWAY'S STUDIO",
      footRight: 'LIGHTS OUT',
    };
  },
  mounted() {
    document.documentElement.classList.add('is-covered');
    // 首次加载：幕布一开始就是盖住的
    gsap.set(this.$refs.col, { yPercent: 0, y: 0 });
    registerCurtain({
      cover: this.cover,
      reveal: this.reveal,
      setProgress: (p) => { this.progress = Math.max(this.progress, p * 100); },
    });
  },
  methods: {
    cover(label = 'Next stop') {
      // 后台标签页里 rAF 暂停，动画不会走完；直接跳过以免卡住导航
      if (document.hidden) {
        document.documentElement.classList.add('is-covered');
        gsap.set(this.$refs.root, { visibility: 'visible' });
        gsap.set(this.$refs.col, { yPercent: 0, y: 0 });
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        document.documentElement.classList.add('is-covered');
        this.label = label;
        this.footLeft = 'IN PIT LANE';
        this.footRight = 'BOX, BOX';
        this.progress = 0;
        this.drawKey += 1;
        const cols = this.$refs.col;
        gsap.killTweensOf([cols, this.$refs.center, this.$refs.foot]);
        gsap.set(this.$refs.root, { visibility: 'visible' });
        gsap.set(cols, { yPercent: 100, y: STEP });
        gsap.set([this.$refs.center, this.$refs.foot], { opacity: 0 });
        gsap.timeline({ onComplete: resolve })
          .to(cols, {
            yPercent: 0,
            y: 0,
            duration: 0.55,
            ease: 'power3.inOut',
            stagger: { each: 0.045, from: 'start' },
          })
          .to([this.$refs.center, this.$refs.foot], { opacity: 1, duration: 0.25 }, '-=0.2')
          .to(this, { progress: 100, duration: 0.45, ease: 'power2.out' }, '<');
      });
    },
    reveal() {
      if (document.hidden) {
        gsap.set(this.$refs.col, { yPercent: -100, y: -STEP });
        gsap.set(this.$refs.root, { visibility: 'hidden' });
        document.documentElement.classList.remove('is-covered');
        window.dispatchEvent(new CustomEvent('away:reveal'));
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        const cols = this.$refs.col;
        gsap.timeline({
          onComplete: () => {
            gsap.set(this.$refs.root, { visibility: 'hidden' });
            resolve();
          },
        })
          .to(this, { progress: 100, duration: 0.25 })
          .to([this.$refs.center, this.$refs.foot], { opacity: 0, y: -16, duration: 0.3, ease: 'power2.in' })
          .add(() => {
            document.documentElement.classList.remove('is-covered');
            window.dispatchEvent(new CustomEvent('away:reveal'));
          })
          .to(cols, {
            yPercent: -100,
            y: -STEP,
            duration: 0.75,
            ease: 'expo.inOut',
            stagger: { each: 0.05, from: 'end' },
          }, '<')
          .set([this.$refs.center, this.$refs.foot], { y: 0 });
      });
    },
  },
};
</script>

<style scoped>
.curtain {
  position: fixed;
  inset: 0;
  z-index: 2000;
  pointer-events: none;
  color: var(--c-accent-ink);
}

.curtain-cols {
  position: absolute;
  inset: 0;
  display: flex;
}

.curtain-col {
  position: relative;
  flex: 1;
  height: 100%;
  margin-right: -1px;
  background: var(--c-accent);
  will-change: transform;
}

/* 竖条顶端的台阶，致敬原站像素化的转场边缘 */
.col-step {
  position: absolute;
  left: 0;
  right: 0;
  top: -18px;
  height: 18px;
  background:
    linear-gradient(var(--c-accent), var(--c-accent)) left bottom / 45% 9px no-repeat,
    linear-gradient(var(--c-accent), var(--c-accent)) right bottom / 30% 18px no-repeat;
}

.curtain-col:nth-child(even) .col-step {
  background:
    linear-gradient(var(--c-accent), var(--c-accent)) left bottom / 25% 18px no-repeat,
    linear-gradient(var(--c-accent), var(--c-accent)) right bottom / 50% 9px no-repeat;
}

.curtain-col::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -18px;
  height: 18px;
  background:
    linear-gradient(var(--c-accent), var(--c-accent)) left top / 35% 12px no-repeat,
    linear-gradient(var(--c-accent), var(--c-accent)) right top / 40% 18px no-repeat;
}

.curtain-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.curtain-mark {
  color: var(--c-accent-ink);
}

.curtain-mark :deep(.mark-dot) {
  fill: var(--c-accent-ink);
}

.curtain-label {
  font-family: var(--f-serif);
  font-style: italic;
  font-size: 1.4rem;
  line-height: 1;
}

.curtain-foot {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.curtain-count {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  font-size: clamp(3rem, 9vw, 7rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 640px) {
  .curtain-foot {
    left: 16px;
    right: 16px;
  }
}
</style>
