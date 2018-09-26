// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import KHeader from './components/com/KHeader'
require('./assets/lib/kevent/js/kevent')

Vue.config.productionTip = false

Vue.prototype.$addEvent = window.addEvent

Vue.component('KHeader', KHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
