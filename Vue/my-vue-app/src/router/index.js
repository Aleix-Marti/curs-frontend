import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/single/:id',
      name: 'single',
      props: true,
      component: () => import('../views/SingleView.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddFighterView.vue'),
    },
  ],
})

export default router
