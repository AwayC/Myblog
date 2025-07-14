<template>
  <Navbar/>
  <router-view/>
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
html {
  scroll-padding-top: 85px; /* 根据导航栏实际高度调整 */
  scroll-behavior: smooth;
}

#app {
  background-color: #2a2a2a;
  color: #e0e0e0; 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

</style>
