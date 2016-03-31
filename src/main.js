import Vue from 'vue'
import App from './App.vue'
import Console from './components/Console.vue'
import Contact from './components/Contact.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(require('vue-resource'))

let router = new VueRouter()

router.map({
  '/m/:slug': {
    name: 'm',
    component: Console
  },
  '/contact': {
    name: 'contact',
    component: Contact
  }
})

/* eslint-disable no-new */
router.start(App, '#app')
