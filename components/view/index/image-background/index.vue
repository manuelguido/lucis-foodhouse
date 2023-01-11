<template>
  <div :class="classList">
    <ViewIndexImageBackgroundFilter :delay="delay">
      <slot />
    </ViewIndexImageBackgroundFilter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ViewIndexImageBackground',
  props: {
    delay: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      wideImage: false as boolean
    }
  },
  computed: {
    classList(): Array<string> {
      return ['index-image-background', this.imageSizeClass]
    },
    imageSizeClass(): string {
      return this.wideImage ? 'wide' : 'normal'
    }
  },
  mounted() {
    this.createAnimation()
  },
  methods: {
    toggleBackground(): void {
      this.wideImage = !this.wideImage
    },

    createAnimation(): void {
      const self = this
      setTimeout(() => {
        self.toggleBackground()
      }, self.delay)

      setTimeout(() => {
        self.toggleBackground()
      }, self.delay + 600)
    }
  }
})
</script>

<style lang="scss" scoped>

// @media screen and (min-width: 992px) {
.index-image-background {
  background-image: url('@/assets/img/home-banner.webp');
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 1.5s all;
}

.index-image-background.wide {
  transform: scale(1.2);
}

.index-image-background.normal {
  transform: scale(1);
}
// }
</style>
