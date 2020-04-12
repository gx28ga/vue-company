import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
