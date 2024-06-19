import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/login.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      nome: 'posts',
      component: () => import('../components/AreaPostagem.vue')
    }
        
  ],
     
})

export default router
