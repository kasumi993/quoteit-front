import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddQuotesView from '@/views/AddQuoteView.vue'
import LoginView from '@/views/LoginView.vue'
import mainContainer from '@/containers/mainContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: mainContainer,
      meta: { bodyClass: '' },
      children: [
        {
          path: '/home',
          name: 'home.index',
          component: HomeView,
          meta: {
            auth: true
          }
        },
        {

          path: '/new-quote',
          name: 'new',
          component: AddQuotesView,
        },
        {
          path: '/login',
          name: 'login',
          component: LoginView,
          meta: {
            auth: false
          }
        }
      ]
    }
  ]
})

export default router

