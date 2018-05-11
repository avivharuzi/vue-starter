import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

// Routes
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '*',
      component: ErrorPage,
      meta: {
        title: '404 - Page Not Found'
      }
    }
  ]
})
