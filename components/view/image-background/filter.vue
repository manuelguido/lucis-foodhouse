<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VieImageBackgroundFilter',
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList(): Array<string> {
      const base: string = 'image-filter'
      const center: string = this.center ? 'center' : ''
      return [base, center]
    }
  }
})
</script>

<style lang="scss" scoped>
.image-filter {
  background: rgba(23, 23, 23, 0.8);
  min-height: 100vh;
  width: 100vw;
}

.image-filter.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 992px) {
  .image-filter:not(.center) {
    padding-top: 20vh;
  }
}

@media screen and (max-width: 992px) {
  .image-filter:not(.center) {
    padding-top: 12vh;
  }
}
</style>
