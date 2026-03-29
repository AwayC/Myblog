<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="copyright">
        © 2025 powered by <span class="brand">AWAY</span>
      </div>
      <div class="filing">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          浙ICP备2026012504号
        </a>
        <span class="separator">|</span>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33019202002917" rel="noreferrer" target="_blank">
          <img src="../assets/beian.png" alt="icon" class="beian-icon" v-if="hasIcon">
          浙公网安备33019202002917号
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      hasIcon: true // 假设 assets 下有 beian.png
    }
  }
}
</script>

<style scoped>
.main-footer {
  width: 100%;
  padding: 40px 20px;
  margin-top: 50px;
  background: rgba(24, 28, 39, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #888;
  font-size: 0.9rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.copyright {
  margin-bottom: 10px;
}

.brand {
  color: #9cc5e2;
  font-weight: bold;
}

.filing a {
  color: #888;
  text-decoration: none;
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.filing a:hover {
  color: #5abbc6;
}

.beian-icon {
  width: 16px;
  height: 16px;
}

.separator {
  margin: 0 15px;
  color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .filing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .separator {
    display: none;
  }
}
</style>
