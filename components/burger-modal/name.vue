<template>
  <component :is="tag" :class="classList">
    {{ text }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerName',
  props: {
    tag: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classList: 'burger-title bebas ls06 mb-4 mb-lg-5' as string
    }
  }
})
</script>

<style scoped>
.burger-title {
  font-size: 2.3em;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
</style>
