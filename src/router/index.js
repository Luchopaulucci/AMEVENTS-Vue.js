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
      name: 'home',
      component: Home
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    },
    {
      path: '/past',
      name: 'past',
      component: Past
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]

  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
