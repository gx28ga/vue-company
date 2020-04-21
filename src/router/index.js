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
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/signupOrlogin'),
    props: {
      userAction: 'signup'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/signupOrlogin'),
    props: {
      userAction: 'login'
    }
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('@/views/signupOrlogin'),
    props: {
      userAction: 'forgotPassword'
    }
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: () => import('@/views/signupOrlogin'),
    props: {
      userAction: 'changePassword'
    }
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
