<template>
  <i :class="iconClass"></i>
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
    iconClass(): string {
      return `${this.icon} align-middle white-a`
    }
  }
})
</script>
