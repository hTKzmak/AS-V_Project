import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPage from '../views/ProductPage.vue'
import ListOfProductsPage from '../views/ListOfProductsPage.vue'
import ErrorPage from '../views/NotFoundView.vue'
import LikeView from '@/views/LikeView.vue'
import CreditPage from '@/views/CreditPage.vue'
import RefundPage from '@/views/RefundPage.vue'
import ContactsPage from '@/views/contactsPage.vue'
import ReviewPage from '@/views/ReviewPage.vue'
import WarrantyPage from '@/views/WarrantyPage.vue'
import DeliveryPage from '@/views/DeliveryPage.vue'

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
      path: '/list_of_products/:category',
      name: 'list_of_products',
      component: ListOfProductsPage
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: LikeView
    },
    {
      path: '/credit',
      name: 'credit',
      component: CreditPage
    },
    {
      path: '/refund',
      name: 'RefundPage', 
      component: RefundPage
    },
    {
      path: '/contacts',
      name: 'contactsPage', 
      component: ContactsPage
    },
    {
      path: '/review',
      name: 'ReviewPage', 
      component: ReviewPage
    },
    {
      path: '/warranty',
      name: 'WarrantyPage', 
      component: WarrantyPage
    },
    {
      path: '/delivery',
      name: 'DeliveryPage', 
      component: DeliveryPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    },
  ],
  scrollBehavior() {
    // Всегда прокручивает к началу страницы
    return { top: 0 };
  }
})


export default router
