import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/0x00' },
    {
      path: '/:id',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
