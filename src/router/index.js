import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PostlistView from '../views/PostlistView.vue';
import PostView from '../views/postView.vue';
import FriendsView from '../views/FriendsView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import AdminLoginView from '../views/AdminLoginView.vue';
import AdminDashboardView from '../views/AdminDashboardView.vue';
import AdminEditorView from '../views/AdminEditorView.vue';

function requireAuth(to, from, next) {
  const token = localStorage.getItem('admin_token');
  if (!token) {
    next({ name: 'admin-login' });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Postlist/',
    name: 'Postlist',
    component: PostlistView,
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView,
  },
  {
    path: '/post/',
    name: 'post',
    component: PostView,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,
  },

  // Admin routes
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLoginView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboardView,
    beforeEnter: requireAuth,
  },
  {
    path: '/admin/editor',
    name: 'admin-editor-new',
    component: AdminEditorView,
    beforeEnter: requireAuth,
  },
  {
    path: '/admin/editor/:id',
    name: 'admin-editor-edit',
    component: AdminEditorView,
    beforeEnter: requireAuth,
  },

  {
    path: '/404/',
    name: '404',
    component: NotFoundView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: '404' },
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
