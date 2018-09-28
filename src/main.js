// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import KHeader from './components/com/KHeader'
import api from './api'
require('./assets/lib/kevent/js/kevent')

Vue.config.productionTip = false

Vue.prototype.$addEvent = window.addEvent

Vue.prototype.$api = api

Vue.filter('formatDate', function (date) {
  return date.split('.')[0].replace('T', ' ')
})

Vue.component('KHeader', KHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
