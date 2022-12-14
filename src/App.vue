<template>
  <div id="app">
    <navbar/>
    <whatsapp/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import whatsapp from '@/components/WhatsappIcon.vue'

export default {
  name: 'home',
  components: {
    navbar,
    whatsapp
  }
}
</script>

<style>
@import './assets/css/lightseed.css';
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Bebas Neue', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-height: 100vh;
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
.majorm { font-family: 'Major Mono Display', monospace; }
.montserrat { font-family: 'Montserrat', sans-serif; }
.title {
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0.07em;
}

@media (min-width: 992px) {
  .title {
    font-size: 3.3em;
  }
  .outer-content {
    min-height: calc(100vh - 50px);
  }
}
@media (max-width: 992px) {
  .title {
    font-size: 2.5em;
  }
  .outer-content {
    min-height: calc(100vh - 50px);
  }
}

</style>
