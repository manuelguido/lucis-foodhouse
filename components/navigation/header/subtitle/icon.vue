<template>
  <i :class="classList"></i>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderSubTitleIcon',
  data() {
    return {
      icon: 'fas fa-circle'
    }
  },
  computed: {
    classList(): string {
      return `icon ${this.icon} text-white-a`
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0.8rem;
}
</style>
