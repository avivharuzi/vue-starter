import Vue from 'vue'
import App from './App'

// Styles
import '@/scss/main.scss'

// Store
import store from '@/store/index'

// Router
import router from './router'

// Filters
import * as filters from './filters/index'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
