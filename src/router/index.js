import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

// Routes
const router = new Router({
  mode: 'history',
  routes: [{
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
