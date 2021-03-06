import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (resolve) => require(['@/components/Index'], resolve),
      children: []
    }, {
      name: 'Blog',
      path: '/blog',
      component: (resolve) => require(['@/components/Blog'], resolve)
    }, {
      name: 'Detail',
      path: '/detail/:aid',
      component: (resolve) => require(['@/components/Detail'], resolve)
    }
  ]
})
