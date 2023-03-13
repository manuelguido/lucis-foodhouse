<template>
  <ViewImageBackground center>
    <div class="inner main-padding">
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
    </div>
    <NavigationFooter />
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
.inner {
  width: 100vw;
}
</style>
