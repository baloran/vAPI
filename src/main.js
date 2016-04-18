import Vue from 'vue'
import App from './App.vue'
import Console from './components/Console.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(require('vue-resource'))

let router = new VueRouter()

router.map({
  '/': {
    name: 'home',
    component: Home
  },
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


console.log('je suis:' + __DEV__);
