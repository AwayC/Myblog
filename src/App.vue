<template>
  <TopoBackground />
  <Navbar/>
  <router-view v-slot="{ Component }">
    <keep-alive include="PostlistView">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <MainFooter v-if="!isFullscreenPage" />
  <TransitionCurtain />
</template>

<script>
import Navbar from './components/Navbar.vue';
import TopoBackground from './components/TopoBackground.vue';
import MainFooter from './components/Footer.vue';
import TransitionCurtain from './components/TransitionCurtain.vue';

// 这些页面是满屏的 3D 场景，不显示页脚
const FULLSCREEN_ROUTES = ['home', '404'];

export default {
  components: {
    Navbar,
    TopoBackground,
    MainFooter,
    TransitionCurtain
  },
  mounted() {
    // 移除 index.html 里的首屏占位
    const boot = document.getElementById('boot');
    if (boot) boot.remove();
  },
  computed: {
    isFullscreenPage() {
      return FULLSCREEN_ROUTES.includes(this.$route.name);
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  scroll-padding-top: 85px;
  scroll-behavior: smooth;
  overflow-x: clip; /* 防止出现横向滚动条 */
}

html.menu-open,
html.menu-open body {
  overflow: hidden;
}

/* 全局滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(242, 240, 233, 0.16);
  border-radius: 10px;
  border: 1px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 128, 0, 0.7);
}

/* Firefox 滚动条 */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(242, 240, 233, 0.16) transparent;
}

#app {
  background-color: transparent;
  color: var(--c-ink);
  font-family: var(--f-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
