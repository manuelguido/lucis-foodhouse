<template>
  <div class="container uns">
    <Navbar/>
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="display-2 bebas black-a">LUCI'S FOODOHOUSE</h1>
        <span class="align-middle">
          <i class="fas fa-circle align-middle black-a"></i>
          <h1 class="align-middle h1 megrim display-inline mx-3">Hamburguesas gourmet</h1>
          <i class="fas fa-circle align-middle black-a"></i>
        </span>
        <h2 class="h1 bebas mt-5 black-a">Próximamente</h2>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style style>
.fa-circle {
  font-size: 9px !important;
}
@media (max-width: 992px) {
  #middle-title {
    font-size: 2em;
  }
}
</style>
