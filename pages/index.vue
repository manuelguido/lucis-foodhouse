<template>
  <div class="home-page">
    <div class="container-fluid text-center outer-content w-100 uns">
      <NavigationHeader />
      <img
        class="mobile-image web-hide"
        :src="require('~/assets/img/home-image.webp')"
      />
    </div>
    <NavigationFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px) {
  .home-page {
    background-image: url('@/assets/img/home-banner.webp');
    min-height: 100vh !important;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}

.mobile-image {
  width: 95%;
  margin: 40px auto 0 auto;
}
</style>
