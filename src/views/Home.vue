<template>
  <div class="home-page">
    <div class="container-fluid outer-content w-100 uns">
      <lucis-header/>
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
.home-page {
  /* The image used */
  background-image: url("../assets/home-banner.webp");
  /* Full height */
  height: 100vh !important;
  width: 100vw;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
