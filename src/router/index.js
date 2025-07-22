import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'; 
import PostlistView from '../views/PostlistView.vue';
import PostView from '../views/postView.vue';
import NotFoundView from '../views/NotFoundView.vue';

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
    path: '/post/', 
    name: 'post', 
    component: PostView, 
  },
  {
    path: '/post/:id', 
    name: 'post', 
    component: PostView, 
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
