<template>
  <mdb-navbar id="main-navbar" class="px-0 px-lg-5 fixed-top uns" light>
    <router-link to="/" class="logo-link ml-lg-4">
      <img class="logo" src="../assets/logo.png">
    </router-link>
    <mdb-navbar-toggler class="ml-auto mr-lg-4">
      <mdb-navbar-nav class="text-right" right>
        <router-link class="nav-link bebas mr-5" to="/" active>Inicio</router-link>
        <router-link class="nav-link bebas mr-5" to="/combos" active>Nuestros combos</router-link>        
        <router-link class="nav-link bebas mr-5 mr-lg-0" to="/contacto" active>Contacto</router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarToggler, mdbNavbarNav } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarToggler,
      mdbNavbarNav
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
      this.handleScroll()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        var nav = document.querySelector('#main-navbar')
        if (window.scrollY <= 20 && window.innerWidth >= 992) {
          nav.classList.add('big-nav')
          nav.classList.remove('small-nav')
        }
        else {
          nav.classList.add('small-nav')
          nav.classList.remove('big-nav') 
        }
      }
    }
  }
</script>

<style>
#main-navbar, #main-navbar * {
  transition: 0.2s all !important;
}
#main-navbar {
  box-shadow: 0 none !important;
}

/* Big navbar */
.big-nav {
  background: 0 none;
  box-shadow: none !important;
  padding-bottom: 1.4em !important;
}

/* Small navbar */
.small-nav {
  background: #fff !important;
  box-shadow:0 7px 19px 0 rgba(0,0,0,.02), 0 2px 6px 0 rgba(0,0,0,.02);
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.small-nav .logo {
  width: 100px !important;
}

@media (min-width: 992px) {
  #main-navbar {
    background: none;
  }
}
@media (max-width: 992px) {
  #main-navbar {
    background: var(--white-a);
  }
  .navbar-toggler-icon {
    margin-right: 1em;
  }
  .logo {
    margin-left: 1em;
  }
}


@media (min-width: 992px) {
  .logo { width: 150px; }
}
@media (max-width: 992px) {
  #navbarSupportedContent {
    background: var(--white-a) !important;
    border-bottom: 14px solid var(--color-a);
  }
  .logo {
    width: 95px;
  }
}
.nav-link {
    color: var(--black-a) !important;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 27px;
    letter-spacing: 0.06em;
}
.nav-link:hover {
  color: var(--color-a) !important;
}
.nav-link:active {
  opacity: 0.5;
}
</style>
