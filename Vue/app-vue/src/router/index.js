import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewView.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/ForView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/api',
      name: 'api',
      component: () => import('../views/ApiView.vue')
    },
    {
      path: '/composition',
      name: 'composition',
      component: () => import('../views/DemoComposition.vue')
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('../views/DemoOptions.vue')
    },
    {
      path: '/single/:turtleId',
      name: 'single',
      props: true,
      component: () => import('../views/SingleView.vue')
    },
    {
      path: '/photo/:photoId',
      name: 'photo',
      props: true,
      component: () => import('../views/PhotoView.vue')
    }
  ]
})

export default router
