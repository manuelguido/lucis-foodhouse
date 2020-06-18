<template>
  <div id="app" class="padding">
    <router-view/>
  </div>
</template>

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
    color: #1d252d;
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
.padding {
  padding-top: 15vh !important;
}
</style>
