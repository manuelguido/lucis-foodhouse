<template>
  <div>
    <div class="container-fluid outer-content w-100 uns error-padding">
      <NavigationHeader />
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <h1 class="message-404 bebas white-b">404</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <h2 class="title-404 bebas mb-5">
            Up's. Parece que esta url no existe.
          </h2>
          <router-link to="/" class="back-link bebas">IR AL INICIO</router-link>
        </div>
      </div>
    </div>
    <NavigationFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error404Page'
})
</script>

<style scoped>
.title-404 {
  font-size: 4em;
}
.message-404 {
  font-size: 7em;
}
@media (min-width: 992px) {
  .error-padding {
    padding-top: 25vh;
  }
}
@media (max-width: 992px) {
  .error-padding {
    padding-top: 20vh;
  }
}
.back-link {
  font-size: 4em;
  color: var(--color-a);
}
.back-link:hover {
  color: var(--black-b);
}
</style>
