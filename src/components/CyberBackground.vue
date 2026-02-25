<template>
  <div class="cyber-balls-bg">
    <div class="bg-base"></div>
    
    <div class="glow-ball ball-1" ref="ball1"></div>
    <div class="glow-ball ball-2" ref="ball2"></div>
    <div class="glow-ball ball-3" ref="ball3"></div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'CyberBackground',
  mounted() {
    // 1. 光球自带的缓慢浮动/呼吸动画 (使用 GSAP)
    gsap.to(this.$refs.ball1, { 
      x: () => Math.random() * 200 - 100, 
      y: () => Math.random() * 200 - 100, 
      duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" 
    });
    gsap.to(this.$refs.ball2, { 
      x: () => Math.random() * -200 + 100, 
      y: () => Math.random() * 200 - 100, 
      duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" 
    });
    gsap.to(this.$refs.ball3, { 
      x: () => Math.random() * 250 - 125, 
      y: () => Math.random() * -250 + 125, 
      duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" 
    });

    // 2. 监听鼠标移动，制造视差交互感
    window.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    gsap.killTweensOf(this.$refs.ball1);
    gsap.killTweensOf(this.$refs.ball2);
    gsap.killTweensOf(this.$refs.ball3);
  },
  methods: {
    handleMouseMove(e) {
      // 计算鼠标在屏幕上的偏移比例 (-0.5 到 0.5)
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      
      // 光球跟随鼠标轻微反向/正向移动
      gsap.to(this.$refs.ball1, { xPercent: x * 1.5, yPercent: y * 1.5, duration: 1.5, ease: "power2.out" });
      gsap.to(this.$refs.ball2, { xPercent: -x * 2, yPercent: -y * 2, duration: 1.5, ease: "power2.out" });
      gsap.to(this.$refs.ball3, { xPercent: x * 2.5, yPercent: -y * 1.5, duration: 1.5, ease: "power2.out" });
    }
  }
};
</script>

<style scoped>
.cyber-balls-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -999; /* 确保在所有网页内容的最底层 */
  pointer-events: none; /* 不会阻挡你的鼠标点击事件 */
}

.bg-base {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0f111a; /* 赛博朋克极暗夜空色底色 */
  z-index: -1;
}

.glow-ball {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px); /* 极度模糊产生光晕感 */
  opacity: 0.6; /* 透明度，以免太亮刺眼 */
  mix-blend-mode: screen; /* 让颜色叠加更加自然发光 */
}

/* 赛博青色光球 (青蓝色) */
.ball-1 {
  width: 45vw;
  height: 45vw;
  background: #70ca9b;
  top: -10%;
  left: -10%;
}

/* 赛博紫粉光球 (霓虹粉) */
.ball-2 {
  width: 40vw;
  height: 40vw;
  background: #b5638c;
  bottom: -15%;
  right: -5%;
}

/* 赛博深紫光球 (紫色) */
.ball-3 {
  width: 35vw;
  height: 35vw;
  background: #8b53c6;
  top: 30%;
  left: 30%;
}
</style>