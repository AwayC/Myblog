<template>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive include="PostlistView">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'; 

export default { 
  components: { 
    Navbar, 
  }
}
</script>

<style>
html, body {
  background-color: #2a2a2a;
  margin: 0;
  padding: 0;
  scroll-padding-top: 85px; /* 根据导航栏实际高度调整 */
  scroll-behavior: smooth;
}

#app {
  background-color: #2a2a2a;
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
