<template>
  <mdb-navbar id="main-navbar" class="pt-4 px-lg-5 fixed-top uns shadow-none" light>
    <router-link to="/" class="logo-link">
      <img class="logo" src="../assets/logo.png">
    </router-link>
    <mdb-navbar-toggler class="ml-auto">
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
    }
  }
</script>

<style>
#main-navbar {
  background: none !important;
  box-shadow: 0 none !important;
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
