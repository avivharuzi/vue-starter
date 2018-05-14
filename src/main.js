import Vue from 'vue'
import App from './App'

import store from '@/store/index'
import router from './router'
import filters from '@/filters/index'

import '@/scss/main.scss'

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
