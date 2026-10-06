<template>
  <div class="not-found" :class="{ 'is-ready': ready }">
    <!-- 4 [头盔] 4 -->
    <div class="nf-digits" aria-hidden="true">
      <span class="nf-digit">4</span>
      <span class="nf-gap"></span>
      <span class="nf-digit">4</span>
    </div>

    <HelmetStage
      class="nf-stage"
      livery="chrome"
      :fill="0.42"
      :offset-y="0.18"
    />

    <div class="nf-bottom">
      <div class="nf-heading">
        <h1 class="nf-title" v-high="{ delay: 400 }">PAGE NOT FOUND</h1>
        <p class="nf-sub" v-high="{ color: 'soft', delay: 550 }"><span class="nf-sub-zh">糟糕！偏离赛道了</span> <span class="ui-serif">veered off track</span></p>
      </div>

      <!-- 幽默段子 -->
      <p class="nf-quote" v-high="{ color: 'soft', delay: 700, key: currentJoke }">“{{ currentJoke }}”</p>

      <!-- 核心按钮组 -->
      <div class="button-group">
        <button class="btn-item btn-ghost roll-host" @click="nextJoke">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 3.93-11.07L2.5 8"/>
          </svg>
          <RollText text="换个吐槽" />
        </button>

        <router-link to="/" class="btn-item btn-accent roll-host">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <RollText text="传送回首页" />
        </router-link>

        <router-link to="/Postlist" class="btn-item btn-ghost roll-host">
          <RollText text="看看文章" />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M7 17L17 7M9 7h8v8"/>
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
  name: 'NotFoundView',
  components: {
    HelmetStage
  },
  data() {
    return {
      ready: false,
      jokes: [
        "糟了！这个页面被薛定谔的猫叼走了……它可能存在，也可能不存在。",
        "你发现了一个平行宇宙裂缝！可惜这里除了虚无，只有这张 404 告示。",
        "博主 AWAY 正在发量告急地寻找这个缺失的页面……",
        "404: 该页面正在喝咖啡休假中，请不要打扰它的假期。",
        "代码千万条，路径第一条。URL打错了，博主两行泪。",
        "恭喜你解锁稀有成就：【迷失在赛博荒野中的探险家】！",
        "这里什么都没有，连拔掉网线都没有小恐龙可以跳跃。"
      ],
      currentJokeIndex: 0
    };
  },
  computed: {
    currentJoke() {
      return this.jokes[this.currentJokeIndex];
    }
  },
  methods: {
    nextJoke() {
      this.currentJokeIndex = (this.currentJokeIndex + 1) % this.jokes.length;
    }
  },
  mounted() {
    this.currentJokeIndex = Math.floor(Math.random() * this.jokes.length);
    // 幕布拉开后再让 4 4 出场
    this.onReveal = () => { this.ready = true; };
    window.addEventListener('away:reveal', this.onReveal);
    if (!document.documentElement.classList.contains('is-covered')) this.ready = true;
  },
  beforeUnmount() {
    window.removeEventListener('away:reveal', this.onReveal);
  }
}
</script>

<style scoped>
.not-found {
  position: relative;
  height: 100vh;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
}

/* 巨型橙色 4 4，头盔放在中间当作 “0” */
.nf-digits {
  position: absolute;
  inset: 0 0 18vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
}

.nf-digit {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  font-size: min(44vh, 30vw);
  line-height: 0.8;
  color: var(--c-accent);
  transform: skewX(-8deg) translateY(8%);
  opacity: 0;
  transition: opacity 1.2s var(--ease-out) 0.3s, transform 1.2s var(--ease-out) 0.3s;
}

.is-ready .nf-digit {
  opacity: 1;
  transform: skewX(-8deg);
}

.nf-gap {
  flex: 0 0 min(36vh, 26vw);
}

.nf-stage {
  z-index: 1;
}

.nf-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 0 20px 34px;
  text-align: center;
}

.nf-title {
  margin: 0;
  font-family: var(--f-sans);
  font-weight: 800;
  font-stretch: 110%;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--c-ink);
}

.nf-sub {
  margin: 4px 0 0;
  font-size: clamp(1.2rem, 2.2vw, 1.8rem);
  line-height: 1.1;
  color: var(--c-accent);
}

.nf-sub-zh {
  font-size: 0.62em;
  font-weight: 600;
  letter-spacing: 0.06em;
  vertical-align: 0.18em;
  margin-right: 6px;
}

.nf-quote {
  max-width: 560px;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--c-ink-2);
}

/* 按钮组 */
.button-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border-radius: var(--radius-s);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
  box-sizing: border-box;
}

.btn-ghost {
  background: rgba(12, 12, 10, 0.5);
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.btn-ghost:hover {
  border-color: var(--c-accent);
  color: var(--c-accent);
}

.btn-accent {
  border: 1px solid var(--c-accent);
  background: var(--c-accent);
  color: var(--c-accent-ink);
}

.btn-accent:hover {
  background: var(--c-accent-soft);
  color: var(--c-accent-ink);
  box-shadow: 0 10px 30px var(--c-accent-glow);
}

@media (max-aspect-ratio: 85/100) {
  .nf-digits {
    inset: 0 0 26vh;
  }

  .nf-digit {
    font-size: 36vw;
  }

  .nf-gap {
    flex-basis: 30vw;
  }
}

@media (max-width: 576px) {
  .button-group {
    flex-direction: column;
    width: 100%;
  }

  .btn-item {
    width: 100%;
    justify-content: center;
  }
}
</style>
