import Vue from 'vue'
import App from './App'

// Styles
import '@/scss/main.scss'

// Store
import store from '@/store/index'

// Router
import router from './router'

// Filters
import filters from '@/filters/index'

Vue.use(filters)

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
