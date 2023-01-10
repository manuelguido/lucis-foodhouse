<template>
  <div id="footer" class="footer">
    <div class="footer-copyright text-center py-3 bg-color-a">
      <div class="container-fluid">
        <div class="row px-lg-5 px-md-4 justify-content-center">
          <div class="col-lg-6 text-left">
            <p class="my-0 py-0">
              © 2020
              <router-link class="primary" to="/contacto">
                Luci's Food House
              </router-link>
              Todos los derechos reservados.
            </p>
          </div>
          <div class="col-12 col-lg-6 text-left text-lg-right">
            <!-- <p class="my-0 py-0">Diseñado y desarrollado por <a href="https://zebradevs.com/" target="_blank">Zebra Devs</a></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterPage'
})
</script>

<style scoped>
#footer {
  margin: 0 !important;
}
.footer-copyright {
  width: 100vw !important;
}
.footer-copyright {
  height: 50px;
}
.footer-copyright p {
  color: var(--black-a);
  font-size: 13px;
  font-weight: 600;
  /* text-shadow: 1px 1px 2px var(--black-d); */
}
.footer-copyright a {
  color: var(--seed-danger);
}
.footer-copyright a:hover,
.footer-copyright a:active {
  color: var(--seed-danger-dark);
}
</style>
