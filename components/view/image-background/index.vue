<template>
  <div :class="classList">
    <ViewImageBackgroundFilter :center="center">
      <slot />
    </ViewImageBackgroundFilter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ViewImageBackground',
  props: {
    center: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      wideImage: false as boolean,
      classList: 'our-burgers-image-background' as string
    }
  }
})
</script>

<style lang="scss" scoped>
.our-burgers-image-background {
  background-image: url('@/assets/img/home-banner.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
}
</style>
