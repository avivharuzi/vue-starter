import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'

Vue.use(Router)

// Routes
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
