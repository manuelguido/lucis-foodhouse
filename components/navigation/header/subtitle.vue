<template>
  <span class="align-middle">
    <NavigationHeaderSubtitleIcon />
    <h1 :id="id" :class="classList">
      {{ text }}
    </h1>
    <NavigationHeaderSubtitleIcon />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderSubTitle',
  data() {
    return {
      text: 'HAMBURGUESAS GOURMET' as string,
      classList:
        'sub-title align-middle megrim display-inline w300 mx-2 mx-lg-3 white-b' as string
    }
  }
})
</script>

<style scoped>
@media (min-width: 992px) {
  .sub-title {
    font-size: 1.8em;
  }
}
@media (max-width: 992px) {
  .ssub-title {
    font-size: 1.6em;
  }
}
@media (max-width: 762px) {
  .ssub-title {
    font-size: 1.3em;
  }
}
</style>
