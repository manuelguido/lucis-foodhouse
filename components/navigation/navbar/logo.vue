<template>
  <nuxt-link :to="url" :class="outerClass">
    <img :class="imageClass" :src="image" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationNavbarLogo',
  data() {
    return {
      url: '/' as string,
      outerClass: 'logo-link ml-lg-4' as string,
      imageClass: 'logo m-3' as string,
      image: require('~/assets/img/lucis-logo-small.png') as File
    }
  }
})
</script>

<style scoped>
.small-nav .logo {
  width: 100px !important;
}

@media (min-width: 992px) {
  .logo {
    width: 8rem;
  }
}

@media (max-width: 992px) {
  .logo {
    width: 5rem;
  }
}
</style>
