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
  text-decoration: none;
}

.link:not(:hover) {
  color: $color-e;
}

.link:hover {
  opacity: 0.8;
}

.link:active {
  opacity: 0.6;
}
</style>
