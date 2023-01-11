<template>
  <div id="map" style="z-index: 1080;">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%; widht=100%;"
      class="map-rounded"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
    </l-map>
  </div>
</template>

<script>
import { latLng, Icon } from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 12,
      center: latLng(-34.906, -57.89),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Olavarría',
      // '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 12,
      currentCenter: latLng(-34.906, -57.89),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
    }
  },
  mounted() {
    this.loadMap()
  },
  methods: {
    loadMap() {
      let recaptchaScript = document.createElement('style')
      recaptchaScript.setAttribute('rel', 'stylesheet')
      recaptchaScript.setAttribute(
        'href',
        'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
      )
      recaptchaScript.setAttribute(
        'integrity',
        'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
      )
      recaptchaScript.setAttribute('crossorigin', '')
      document.head.appendChild(recaptchaScript)

      recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute(
        'src',
        'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js'
      )
      recaptchaScript.setAttribute(
        'integrity',
        'sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=='
      )
      recaptchaScript.setAttribute('crossorigin', '')
      document.head.appendChild(recaptchaScript)
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    showLongText() {
      this.showParagraph = !this.showParagraph
    },
    coord(place) {
      return latLng(place.latitude, place.longitude)
    }
  }
}
</script>

<style scoped>
#map {
  width: 50%;
  /* height: 400px; */
  border-radius: 4px !important;
  overflow: hidden !important;
  padding: 0 !important;
  box-shadow: 0 0.07em 0.125em 0 rgba(0, 0, 0, 0.15) !important;
}
.map-rounded {
  border-radius: 4px !important;
}
@media (min-width: 992px) {
  #map {
    height: 500px;
  }
}
.marker-popup {
  font-family: 'Nunito', sans-serif;
}
.marker-popup h3 {
  font-size: 17px !important;
}
</style>
