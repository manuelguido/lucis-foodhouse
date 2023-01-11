<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ViewIndexImageBackgroundFilter',
  props: {
    delay: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      glassEffect: false as boolean
    }
  },
  computed: {
    classList(): Array<string> {
      return ['image-filter', this.classBackground]
    },
    classBackground(): string {
      return this.glassEffect ? 'glass' : 'dark'
    }
  },
  mounted() {
    this.createAnimation()
  },
  methods: {
    toggleBackground(): void {
      this.glassEffect = !this.glassEffect
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
.image-filter {
  transition: 3s all !important;
}

.image-filter {
  height: 100%;
  width: 100%;
}

.image-filter.dark {
  background: rgba(23, 23, 23, 0.7);
}

.image-filter.glass {
  background: rgba(35, 35, 35, 0.37);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18.7px);
  -webkit-backdrop-filter: blur(18.7px);
}
</style>
