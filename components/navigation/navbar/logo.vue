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
      imageClass: 'logo' as string,
      image: require('~/assets/img/logo-white.png') as File
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
    width: 150px;
  }
}

@media (max-width: 992px) {
  .logo {
    margin-left: 1em;
  }
}

@media (max-width: 992px) {
  .logo {
    width: 95px;
  }
}
</style>
