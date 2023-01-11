<template>
  <mdb-navbar id="main-navbar" :class="classList" light>
    <NavigationNavbarLogo />
    <NavigationNavbarItems />
  </mdb-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
const mdbvue = require('mdbvue')
const { mdbNavbar } = mdbvue

export default Vue.extend({
  name: 'NavbarPage',
  components: {
    mdbNavbar
  },
  data() {
    return {
      classList: 'px-0 px-lg-5 fixed-top uns' as string
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(): void {
      const nav = document.querySelector('#main-navbar')
      if (nav && window.scrollY <= 20 && window.innerWidth >= 992) {
        nav.classList.add('big-nav')
        nav.classList.remove('small-nav')
      } else if (nav) {
        nav.classList.add('small-nav')
        nav.classList.remove('big-nav')
      }
    }
  }
})
</script>

<style scoped>
#main-navbar,
#main-navbar * {
  transition: 0.2s all !important;
}
#main-navbar {
  box-shadow: 0 none !important;
}

/* Big navbar */
.big-nav {
  /* From https://css.glass */
  background: rgba(35, 35, 35, 0.16);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow: none !important;
  padding: 0.5rem 0;
}

/* Small navbar */
.small-nav {
  /* From https://css.glass */
background: rgba(35, 35, 35, 0.16);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

  box-shadow: 0 7px 19px 0 rgba(0, 0, 0, 0.02), 0 2px 6px 0 rgba(0, 0, 0, 0.02);
  padding: 0.2rem 0;
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
}

@media (max-width: 992px) {
  #navbarSupportedContent {
    background: var(--white-a) !important;
    border-bottom: 14px solid var(--color-a);
  }
}
</style>
