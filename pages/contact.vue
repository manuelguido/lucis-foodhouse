<template>
  <ViewImageBackground>
    <div class="d-flex flex-column">
      <div class="row mb-5">
        <div class="col-12 mb-md-5">
          <NavigationHeader />
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-6 text-center">
          <ViewContactSocial />
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 text-center">
          <ViewContactLocation />
        </div>
      </div>
      <NavigationFooter />
    </div>
  </ViewImageBackground>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage',
  head() {
    return {
      title: 'Contacto'
    }
  }
})
</script>

<style scoped>
#contact-page a.item:hover {
  color: var(--color-a);
}
.mapouter {
  height: 40vh;
  position: relative;
  text-align: left;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 80%;
  height: 100%;
}
</style>
