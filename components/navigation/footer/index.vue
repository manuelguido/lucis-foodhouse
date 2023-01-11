<template>
  <div id="footer" class="footer">
    <div class="footer-copyright text-center py-5">
      <div class="row px-lg-5 px-md-4 justify-content-center">
        <div class="col-lg-6 text-left">
          <FooterCredits />
        </div>
        <div class="col-12 col-lg-6 text-left text-lg-right">
          <!-- <p class="my-0 py-0">Diseñado y desarrollado por <a href="https://zebradevs.com/" target="_blank">Zebra Devs</a></p> -->
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
  background: rgba(80, 80, 80, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  width: 100vw !important;
}
.footer-copyright {
  height: 50px;
}
</style>
