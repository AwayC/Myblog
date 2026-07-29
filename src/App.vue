<template>
  <CyberBackground />
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive include="PostlistView">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <MainFooter />
</template>

<script>
import Navbar from './components/Navbar.vue'; 
import CyberBackground from './components/CyberBackground.vue';
import MainFooter from './components/Footer.vue';

export default { 
  components: { 
    Navbar, 
    CyberBackground,
    MainFooter
  }
}
</script>

<style>
/* === 修改核心 ===：将之前的背景色全删掉，改为透明，否则会挡住光球 */
html, body {
  /* background-color: #2a2a2a; (删掉或注释掉) */
  background-color: transparent;
  margin: 0;
  padding: 0;
  scroll-padding-top: 85px;
  scroll-behavior: smooth;
  overflow-x: hidden; /* 防止出现横向滚动条 */
}

/* 全局滚动条圆角样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(156, 197, 226, 0.3);
  border-radius: 10px;
  border: 1px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 197, 226, 0.5);
  border-radius: 10px;
}

/* Firefox 滚动条 */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 197, 226, 0.3) transparent;
}

#app {
  /* background-color: #2a2a2a; (删掉或注释掉) */
  background-color: transparent;
  color: #e0e0e0; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
