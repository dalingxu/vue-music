import Vue from 'vue'
import Router from 'vue-router'
// route level code-splitting
// this generates a separate chunk (login.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Main = () => import('./views/Main.vue')
const Find = () => import('./views/find/')
const Login = () => import('./views/login/')
const Account = () => import('./views/account/')
const Video = () => import('./views/video/')
const Mine = () => import('./views/mine/')
const Firends = () => import('./views/firends/')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'home',
      redirect: '/main/find',
      component: Main,
      children: [
        {
          path: '/main/find',
          name: 'find',
          component: Find
        },
        {
          path: '/main/account',
          name: 'account',
          component: Account
        },
        {
          path: '/main/video',
          name: 'video',
          component: Video
        },
        {
          path: '/main/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/main/firends',
          name: 'firends',
          component: Firends
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
