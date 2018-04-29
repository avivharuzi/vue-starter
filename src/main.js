import Vue from 'vue'
import App from './App'
import router from './router'

// Styles
import '@/scss/main.scss'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
