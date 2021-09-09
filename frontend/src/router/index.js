import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/home.vue') },
    { path: '/login', component: () => import('../views/login.vue') },
    { path: '/articleList', component: () => import('../views/articleList.vue') }
  ]
});

export default router
