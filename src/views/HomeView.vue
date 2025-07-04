<template>

  <div class="home-container">

    <div class="background-wrapper">
      <MagneticBackground/>
    </div>
    
    <div class="content-layer">
      <div class="welcome-banner">
        <h1 class="cyber-glow typewriter">AWAY's Studio</h1>
        <p class="subtitle" style="font-weight: border;">developing ...</p>
      </div>
      
      <div class="post-link">
        <router-link to="/Postlist" class="link-button">
          <typeWord>
            go to posts
          </typeWord>
        </router-link>
      </div>
      
    </div>

  </div>

</template>

<script>

import typeWord from '@/components/typeWord.vue'; 
import MagneticBackground from '../components/MagneticBackgroud.vue'; 

export default {
  name: 'HomeView', 
  components: {
    MagneticBackground, 
    typeWord,
  },

};
</script>

<style scoped>
.home-container {
  padding-top: 50px; 
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.content-layer {
  position: relative;
  z-index: 1;  
}

.welcome-banner {
  margin-top: 20%; 
  text-align: center;
  margin-bottom: 140px; 
}

.cyber-glow.typewriter {
  overflow: hidden; 
  border-right: 2px solid #20c997; 
  white-space: nowrap;
  animation: 
    typing 1.2s steps(12, end),
    blink-caret 1s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width:  calc(12ch);}
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #20c997 }
}




.cyber-glow {
  font-family: 'Orbitron', sans-serif;
  color: #20c997;
  text-shadow: 0 0 15px rgba(32, 201, 151, 0.4);
  font-size: 2.5rem;
  display: inline-block; 
}

.subtitle {
  color: #8a8a8a;
  font-size: 1.2rem;
}

.post-link { 
  margin-top: 50px; 
  display: block; 
  text-align: center;
  font-family: 'Orbitron', sans-serif;
}

.link-button { 
  display: inline-block;
  color: #b7bd0e !important; 
  text-shadow: 0px 0px 10px rgba(213, 219, 62, 0.4);
  transition: font-size 0.5s ease;
  animation: 
    shining 3.5s infinite;
}

@keyframes shining {
  0% {
    text-shadow: 0px 0px 10px rgba(213, 219, 62, 0.4);
  }
  50% {
    text-shadow: 0px 0px 30px rgba(234, 240, 70, 0.8);
  }
  100% {
    text-shadow: 0px 0px 10px rgba(213, 219, 62, 0.4);
  }
}

.link-button:hover { 
  font-size: 1.05rem;
}


</style>