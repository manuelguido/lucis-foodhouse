<template>
  <a class="link" :href="link.route" :target="target">
    {{ link.text }}
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TextLink',
  props: {
    link: {
      type: Object,
      required: true
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.link {
  cursor: pointer;
  color: $color-a !important;
  text-decoration: none;
}

.link:not(:hover) {
  opacity: 0.35;
}

.link:hover {
  opacity: 1;
}

.link:active {
  opacity: 0.6;
}
</style>
