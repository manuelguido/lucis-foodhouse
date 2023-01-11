<template>
  <mdb-navbar id="main-navbar" :class="classList" dark>
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
      classList: 'px-3 px-lg-5 fixed-top uns' as string
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

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

// #main-navbar,
// #main-navbar * {
//   transition: 0.5s all !important;
// }
#main-navbar {
  box-shadow: 0 none !important;
}

/* Big navbar */
.big-nav {
  background: rgba(35, 35, 35, 0.16);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow: none !important;
  padding: 0.5rem 0;
}

/* Small navbar */
.small-nav {
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
    background: rgba(35, 35, 35, 0.37);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(18.7px);
    -webkit-backdrop-filter: blur(18.7px);
  }
}
</style>
