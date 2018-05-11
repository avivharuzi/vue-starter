import Vue from 'vue'
import App from './App'
import router from './router'

// Styles
import '@/scss/main.scss'

// Filters
import * as filters from './filters/index'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
