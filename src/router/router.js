import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Create.vue'),
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: () => import('../views/List.vue')
  }, {
    path: '/quotes/:id',
    name: 'quote',
    component: () => import('../views/quote.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
