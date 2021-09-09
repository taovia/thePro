import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/home.vue') },
    { path: '/login', component: () => import('../views/login.vue') },
    { path: '/article', component: () => import('../views/article.vue') }
  ]
});

export default router
