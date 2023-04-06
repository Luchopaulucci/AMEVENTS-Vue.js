import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Past from '../components/Past.vue'
import Contact from '../components/Contact.vue'
import Detail from '../components/Detail.vue'
import Stats from '../components/Stats.vue'
import Upcoming from '../components/Upcoming.vue'

Vue.use(Router)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
    {
      path: '/past',
      name: 'Past',
      component: Past
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]

  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
