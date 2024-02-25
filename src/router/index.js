import { createRouter, createWebHistory } from 'vue-router'

/* istanbul ignore next */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      /* istanbul ignore next */
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
