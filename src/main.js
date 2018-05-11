import Vue from 'vue'
import App from './App'
import router from './router'

// Styles
import '@/scss/main.scss'

// Filters
import * as filters from './filters/index'
console.log(filters)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

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
