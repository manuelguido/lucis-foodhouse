<template>
  <nuxt-link :to="url">
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
      imageClass: 'logo' as string,
      image: require('~/assets/img/lucis-logo-small.png') as File
    }
  }
})
</script>

<style scoped>
img {
  transition: 0.3s all !important;
}
@media (min-width: 992px) {
  .big-nav .logo {
    width: 7rem;
  }
  .small-nav .logo {
    width: 5rem;
  }
}

@media (max-width: 992px) {
  .logo {
    width: 4rem;
  }
}
</style>
