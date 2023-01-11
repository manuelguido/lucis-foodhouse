<template>
  <component :is="tag" :class="classList">
    {{ text }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerTitle',
  props: {
    tag: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'white-a'
    }
  },
  computed: {
    colorClass(): string {
      return `text-${this.color}`
    },
    classList(): Array<string> {
      const base: string = 'h3-responsive bebas ls-6'
      return [this.colorClass, base]
    }
  }
})
</script>
