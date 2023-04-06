<template>
  <div id="app">
<!---------------------------------------------------NAVBAR---------------------------------------------------------->
    <header>
      <nav class="navbar">
        <div class="container">
          <a class="navbar-brand" href="./index.html">
            <img src="./assets/logo.png" alt="Logo" class="logo" />
          </a>
<!---------------------------------------------------BOTONES DE NAVEGACION------------------------------------------->
            <div class="links">
              <button type="button" class="btn boton"> <router-link to="/">Home</router-link> </button>
              <button type="button" class="btn boton"> <router-link to="/upcoming">Upcoming Events</router-link> </button>
              <button type="button" class="btn boton"> <router-link to="/past">Past Events</router-link> </button>
              <button type="button" class="btn boton"> <router-link to="/contact">Contact</router-link> </button>
              <button type="button" class="btn boton"> <router-link to="/stats">Stats</router-link> </button>
            </div>
<!---------------------------------------------------DROPDOWN PARA EL RESPONSIVE------------------------------------->
            <div class="dropstart">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="">Home</a></li>
                <li><a class="dropdown-item" href="./upcomingEvents.html">Upcoming</a></li>
                <li><a class="dropdown-item" href="./pastEvents.html">Past</a></li>
                <li><a class="dropdown-item" href="./contact.html">Contact</a></li>
                <li><a class="dropdown-item" href="./stats.html">Stats</a></li>
              </ul>
            </div>
        </div>
      </nav>
    </header>

    <div class="contenido">
      <router-view></router-view>
    </div>

<!---------------------------------------------------FOOTER---------------------------------------------------------->
    <footer>
      &copy; 2023 Amazing Events - Paulucci
    </footer>
  </div>
</template>



<!---------------------------------------------------SCRIPTS--------------------------------------------------------->
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Contact from './components/Contact.vue'
import Detail from './components/Detail.vue'
import Home from './components/Home.vue'
import Past from './components/Past.vue'
import Stats from './components/Stats.vue'
import Upcoming from './components/Upcoming.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/detail', component: Detail },
  { path: '/contact', component: Contact },
  { path: '/past', component: Past },
  { path: '/upcoming', component: Upcoming },
  { path: '/stats', component: Stats },
]

const router = new VueRouter({
  routes,
  mode: 'history' // para tener URLs limpias (sin el signo #)
})

export default {
  name: 'App',
  router
}
</script>



<!---------------------------------------------------ESTILOS--------------------------------------------------------->
<style>
/* --------------------------------------------------CUERPO ------------------------------------------------------- */
body{
  background-color: #000000;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* --------------------------------------------------NAVBAR ------------------------------------------------------- */
.logo{
    width: 333px;
    height: 55px;
    border-radius: 8px;
}

.router-link-exact-active{
  text-decoration: none;
  color: #aa43df;
  font-size: medium;
}

a{
  letter-spacing: 0.5px;
  text-decoration: none;
  color: white;
  font-size: larger;
}

.dropstart{
  display: none;
}

/* --------------------------------------------------CONTENIDO ---------------------------------------------------- */
.contenido{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

/* --------------------------------------------------FOOTER ------------------------------------------------------- */
footer{
  position: fixed;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: larger;
  color: white;
}

</style>
