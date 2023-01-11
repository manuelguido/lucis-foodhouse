<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ViewIndexImageBackgroundFilter',
  data() {
    return {
      classList: 'image-filter' as string
    }
  }
})
</script>

<style lang="scss" scoped>
.image-filter {
  height: 100%;
  width: 100%;
  background: rgba(23, 23, 23, 0.9);
}

@media screen and (min-width: 992px) {
  .image-filter {
    padding-top: 12vh;
  }
}

@media screen and (max-width: 992px) {
  .image-filter {
    padding-top: 8vh;
  }
}
</style>
