<template>
  <div id="contact-page">
    <div class="container-fluid outer-content w-100 uns">
      <NavigationHeader />
      <div class="row mt-lg-5 pt-3">
        <div class="col-12 col-lg-6 text-center">
          <h1 class="title mb-4 mb-lg-5">CONTACTATE CON NOSOTROS</h1>
          <a
            class="item"
            target="_black"
            href="https://api.whatsapp.com/send?phone=+5492284624049"
          >
            <i class="fab fa-whatsapp mr-3 white-d"></i>
            2284624049
          </a>
          <a
            class="item"
            target="_black"
            href="https://www.instagram.com/lucisfoodhouse/"
          >
            <i class="fab fa-instagram mr-3 white-d"></i>
            @lucisfoodhouse
          </a>
          <p class="item">
            <i class="fas fa-envelope mr-3 white-d"></i>
            lucisfoodhouse@hotmail.com
          </p>
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 text-center">
          <h1 class="title mb-4 mb-lg-5">DONDE ENCONTRARNOS</h1>
          <p class="item">
            <i class="fas fa-map-marker-alt mr-3 white-d"></i>OLAVARRÍA, BUENOS
            AIRES
          </p>
          <!-- <v-map></v-map> -->
        </div>
      </div>
    </div>
    <NavigationFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage'
  // mounted () {
  //   let recaptchaScript = document.createElement('style')
  //   recaptchaScript.setAttribute('rel', 'stylesheet')
  //   recaptchaScript.setAttribute('href', 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css')
  //   recaptchaScript.setAttribute('integrity', 'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==')
  //   recaptchaScript.setAttribute('crossorigin', '')
  //   document.head.appendChild(recaptchaScript)

  //   recaptchaScript = document.createElement('script')
  //   recaptchaScript.setAttribute('src', 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js')
  //   recaptchaScript.setAttribute('integrity', 'sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==')
  //   recaptchaScript.setAttribute('crossorigin', '')
  //   document.head.appendChild(recaptchaScript)
  // }
})
</script>

<style scoped>
#contact-page .item {
  display: block;
  color: var(--black-a);
  margin: 0 0 20px 0 !important;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 0.05em;
}
@media (min-width: 992px) {
  #contact-page .item {
    font-size: 2.2em;
  }
}
@media (max-width: 992px) {
  #contact-page .item {
    font-size: 1.8em;
  }
}

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
