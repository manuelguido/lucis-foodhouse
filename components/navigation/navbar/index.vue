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
      classList: 'px-3 px-lg-5 fixed-top main-padding uns' as string
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
@import '@/assets/scss/glassmorphism';

#main-navbar,
#main-navbar * {
  transition: 0.3s all !important;
}

#main-navbar {
  @include glassBlackDark;
}

/* Big navbar */
.big-nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Small navbar */
.small-nav {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
