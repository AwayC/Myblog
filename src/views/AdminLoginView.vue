<template>
  <div class="admin-login-container">
    <div class="login-card">
      <h2 class="login-title">Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Enter username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <button type="submit" class="btn btn-login w-100" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import router from '@/router/index';

export default {
  name: 'AdminLoginView',
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 60px;
}

.login-card {
  background-color: rgba(37, 45, 56, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.login-title {
  color: #9cc5e2;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Orbitron', sans-serif;
}

.form-label {
  color: #cacaca;
}

.form-control {
  background-color: rgba(24, 28, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e0e0e0;
}

.form-control:focus {
  background-color: rgba(24, 28, 39, 0.9);
  border-color: #5abbc6;
  color: #e0e0e0;
  box-shadow: 0 0 0 0.2rem rgba(90, 187, 198, 0.25);
}

.btn-login {
  background-color: #5abbc6;
  border: none;
  color: #1a1a1a;
  font-weight: 600;
  padding: 10px;
  margin-top: 10px;
  transition: all 0.3s;
}

.btn-login:hover {
  background-color: #4aa8b3;
}

.btn-login:disabled {
  background-color: #3a7a82;
  color: #888;
}
</style>
