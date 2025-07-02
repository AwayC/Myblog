<template>

  <div class="home-container">
    <!-- 新增背景容器 -->
    <div class="background-wrapper">
      <MagneticBackground/>
    </div>
    
    <div class="content-layer">
      <div class="welcome-banner">
        <h1 class="cyber-glow typewriter">AWAY's Studio</h1>
        <p class="subtitle" style="font-weight: border;">developing ....</p>
      </div>
      
      

    </div>

  </div>

</template>

<script>
// 确保导入路径正确，根据您的实际文件结构调整
// 假设 Home.vue 在 src/views/，MagneticBackground.vue 在 src/components/
import MagneticBackground from '../components/MagneticBackgroud.vue'; 

export default {
  name: 'HomeView', // 建议使用 'HomeView' 来区分主页组件
  components: {
    MagneticBackground, // 注册组件以便在模板中使用
  },
  // HomeView 组件本身的逻辑可以在这里添加
};
</script>

<style scoped>
.home-container {
  padding-top: 50px; 
  position: relative;
  min-height: 100vh;
  overflow: hidden; /* 新增：隐藏溢出背景 */
}

.background-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.content-layer {
  position: relative;
  z-index: 1;  /* 确保内容在上层 */
}

.welcome-banner {
  margin-top: 20%; 
  text-align: center;
  margin-bottom: 100px; 
}

.cyber-glow.typewriter {
  overflow: hidden; 
  border-right: 2px solid #20c997; /* 光标颜色 */
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
  display: inline-block; /* 新增 */
}

.subtitle {
  color: #8a8a8a;
  font-size: 1.2rem;
}


</style>