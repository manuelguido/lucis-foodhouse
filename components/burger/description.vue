<template>
  <component :is="tag" :class="classList">
    {{ text }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerDescription',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classList: 'h4-responsive burger-title ls-6 text-white-a' as string
    }
  }
})
</script>

<style lang="scss" scoped>
.burger-title {
  text-shadow: 0px 3px 6px rgba(255, 255, 255, 0.2);
}
</style>
