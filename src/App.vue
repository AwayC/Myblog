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
  <footer class="footer">
    <div class="copyright">
      © 2025 powered AWAY<br>
      <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
        <img src="./assets/beian.png" alt="备案号" class="beian-icon"> 
        <span> 浙公网安备 33019202002917号</span>
      </a> | 
      <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">浙ICP备2026012504号</a>
    </div>
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'; 
import CyberBackground from './components/CyberBackground.vue'; // 引入组件

export default { 
  components: { 
    Navbar, 
    CyberBackground // 注册组件
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
}

#app {
  /* background-color: #2a2a2a; (删掉或注释掉) */
  background-color: transparent;
  color: #e0e0e0; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}


nav {
  padding: 30px;
}

.footer { 
  padding: 40px; 
}

.copyright {
  color: #777;
  text-align: center;
  font-family:  "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  line-height: 1.8;
}

.copyright a {
  color: #777;
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: #c0c0c0;
}

.beian-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  margin-right: 2px;
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
