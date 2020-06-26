<template>
  <div class="home-page">
    <div class="container-fluid text-center outer-content w-100 uns">
      <lucis-header/>
      <!-- <img class="mobile-image web-hide" src="../assets/home-image.jpeg"> -->
    </div>
    <lucis-footer/>
  </div>
</template>

<script>
import lucisFooter from '@/components/Footer.vue'
import lucisHeader from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    'lucis-footer': lucisFooter,
    'lucis-header': lucisHeader
  }
}
</script>

<style scoped>
@media (min-width: 2px) {
  .home-page {
    /* The image used */
    background-image: url("../assets/home-image.jpeg");
    /* Full height */
    height: 100vh !important;
    width: 100vw;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.mobile-image {
  width: 90%;
  margin: 0 auto 40px auto;
}
</style>
