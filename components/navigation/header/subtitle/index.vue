<template>
  <div class="d-flex flex-row justify-content-center align-items-center p-0">
    <NavigationHeaderSubtitleIcon />
    <h1 :id="id" :class="classList">
      {{ text }}
    </h1>
    <NavigationHeaderSubtitleIcon />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderSubTitle',
  data() {
    return {
      text: 'HAMBURGUESAS GOURMET' as string,
      classList:
        'subtitle megrim fw-500 mx-2 mt-2 mx-lg-3 text-white-b' as string
    }
  }
})
</script>

<style lang="scss" scoped>
.subtitle {
  line-height: 1;
}
@media (min-width: 992px) {
  .subtitle {
    font-size: 2.1rem;
  }
}
@media (max-width: 992px) {
  .subtitle {
    font-size: 1.7rem;
  }
}
@media (max-width: 762px) {
  .subtitle {
    font-size: 1.3rem;
  }
}
</style>
