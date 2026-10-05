<template>
  <div class="admin-login-container">
    <div class="login-hero">
      <div class="login-eyebrow ui-eyebrow"><span class="accent">N° 00</span> — Restricted area</div>
      <h1 class="login-big">
        <span class="lb-sans">PIT</span>
        <span class="lb-serif">wall</span>
      </h1>
      <p class="login-note">只有车队成员可以进入。<br><span class="ui-serif">Box, box — authorised crew only.</span></p>
    </div>

    <div class="login-card">
      <div class="login-card-head">
        <AwayMark :size="40" dot />
        <span class="ui-eyebrow">Admin login</span>
      </div>
      <h2 class="login-title">Sign in</h2>
      <form @submit.prevent="handleLogin">
        <div class="field">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Enter username"
            autocomplete="username"
            required
          />
        </div>
        <div class="field">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter password"
            autocomplete="current-password"
            required
          />
        </div>
        <div v-if="error" class="login-error">{{ error }}</div>
        <button type="submit" class="btn btn-login roll-host" :disabled="loading">
          <RollText :key="loading ? 1 : 0" :text="loading ? 'Logging in...' : 'Login'" />
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router/index';
import AwayMark from '@/components/AwayMark.vue';

export default {
  name: 'AdminLoginView',
  components: { AwayMark },
  data() {
    return {
      username: '',
      password: '',
      error: '',
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.error = '';
      this.loading = true;
      try {
        const baseUrl = process.env.VUE_APP_API_URL || '';
        const apiUrl = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;
        const res = await fetch(`${apiUrl}/admin/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.username, password: this.password }),
        });
        const data = await res.json();
        if (res.ok) {
          localStorage.setItem('admin_token', data.token);
          localStorage.setItem('admin_username', data.username);
          router.push({ name: 'admin' });
        } else {
          this.error = data.error || '登录失败';
        }
      } catch (err) {
        this.error = '网络错误，请检查后端是否启动';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.admin-login-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  align-items: center;
  gap: 60px;
  max-width: 1320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: calc(var(--nav-h) + 20px) 28px 40px;
}

.accent {
  color: var(--c-accent);
}

.login-big {
  display: flex;
  flex-direction: column;
  margin: 24px 0 28px;
  line-height: 0.8;
  font-size: clamp(5rem, 16vw, 15rem);
  color: var(--c-ink);
}

.lb-sans {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  letter-spacing: -0.05em;
}

.lb-serif {
  font-family: var(--f-serif);
  font-style: italic;
  color: var(--c-accent);
  padding-left: 0.3em;
}

.login-note {
  margin: 0;
  color: var(--c-ink-2);
  line-height: 1.6;
}

.login-note .ui-serif {
  font-size: 1.25rem;
  color: var(--c-ink);
}

/* 切角卡片 */
.login-card {
  --cut: 26px;
  position: relative;
  padding: 26px 28px 30px;
  isolation: isolate;
}

.login-card::before,
.login-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
}

.login-card::before {
  background: var(--c-line-strong);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

.login-card::after {
  background: rgba(17, 17, 14, 0.94);
  clip-path: polygon(1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px), calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px));
}

.login-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  margin-bottom: 22px;
  border-bottom: 1px dashed var(--c-line-strong);
  color: var(--c-ink);
}

.login-title {
  margin: 0 0 22px;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--c-ink);
}

.field {
  margin-bottom: 16px;
}

.form-label {
  margin-bottom: 8px;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.form-control {
  height: 48px;
  background-color: #0d0d0b;
  border: 1px solid var(--c-line-strong);
  border-radius: 10px;
  color: var(--c-ink);
  font-size: 0.95rem;
}

.form-control::placeholder {
  color: var(--c-ink-3);
}

.form-control:focus {
  background-color: #0d0d0b;
  border-color: var(--c-accent);
  color: var(--c-ink);
  box-shadow: 0 0 0 4px rgba(255, 128, 0, 0.14);
}

.login-error {
  margin-bottom: 14px;
  padding: 10px 12px;
  border-left: 2px solid #ff5a4f;
  border-radius: 0 8px 8px 0;
  background: rgba(255, 90, 79, 0.08);
  color: #ff8a80;
  font-size: 0.86rem;
}

.btn-login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 8px;
  padding: 0 18px 0 20px;
  border: 0;
  border-radius: 10px;
  background-color: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 800;
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 0.3s, box-shadow 0.3s;
}

.btn-login:hover {
  background-color: var(--c-accent-soft);
  color: var(--c-accent-ink);
  box-shadow: 0 12px 40px var(--c-accent-glow);
}

.btn-login:disabled {
  background-color: #7a4410;
  color: rgba(22, 11, 0, 0.7);
}

@media (max-width: 900px) {
  .admin-login-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .login-big {
    font-size: 26vw;
    margin: 16px 0;
  }
}
</style>
