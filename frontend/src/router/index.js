import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPage from '../views/ProductPage.vue'
import ErrorPage from '../views/NotFoundView.vue'
import LikeView from '@/views/LikeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: LikeView
    },
  ],
  scrollBehavior() {
    // Всегда прокручивает к началу страницы
    return { top: 0 };
  }
})

export default router
