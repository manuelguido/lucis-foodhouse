<template>
  <component :is="tag" :class="classList">
    {{ text }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classList: 'h2-responsive bebas text-white-a ls-9 mb-4 mb-lg-5'
    }
  }
})
</script>
