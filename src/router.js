import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Combos from './views/combos.vue'
import Contact from './views/contact.vue'
import Error404 from './views/error404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/combos',
      name: 'combos',
      component: Combos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contact
    },
    {
      path: '*',
      name: '404',
      component: Error404
    }
  ]
})
