import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calendrier',
      name: 'Calendrier',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Calendrier.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      /* webpackChunkName: "about" */
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/superheroes',
      name: 'superheroes',
      /* webpackChunkName: "about" */
      component: () => import('./views/Superheroes.vue')
    }
  ]
})
