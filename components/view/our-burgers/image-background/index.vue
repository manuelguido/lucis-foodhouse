<template>
  <div :class="classList">
    <ViewOurBurgersImageBackgroundFilter>
      <slot />
    </ViewOurBurgersImageBackgroundFilter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ViewIndexImageBackground',
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
}
</style>
