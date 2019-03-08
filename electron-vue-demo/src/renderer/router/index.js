import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/views/homePage').default
    },
    {
      path: '/print',
      name: 'print-template',
      component: require('@/views/printTemplate').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
