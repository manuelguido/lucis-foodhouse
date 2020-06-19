<template>
  <div id="app">
    <navbar/>
    <div class="content">
      <router-view/>
    </div>
    <lucis-footer/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import lucisFooter from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    navbar,
    'lucis-footer': lucisFooter
  }
}
</script>

<style>
@import './assets/css/lightseed.css';

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
/*
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');
*/

#app {
    font-family: 'Bebas Neue', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: var(--black-a);
    margin: 0;
    padding: 0;
    -webkit-touch-callout: none;
      -webkit-user-select: none;
       -khtml-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
}
.bebas { font-family: 'Bebas Neue', cursive; }
.megrim { font-family: 'Megrim', cursive; }
/* .expletus { font-family: 'Expletus Sans', cursive; }
.majorm { font-family: 'Major Mono Display', monospace; }
.montserrat { font-family: 'Montserrat', sans-serif; }
.fredoka { font-family: 'Fredoka One', cursive; }
.nosifer { font-family: 'Nosifer', cursive; } */
.content {
  padding-top: 15vh !important;
  min-height: calc(100vh - 70px);
}
</style>
