<template>
  <h1 :class="classList">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderTitle',
  data() {
    return {
      text: "LUCI'S FOOD HOUSE" as string,
      classList: 'h1-responsive bebas text-white-a' as string
    }
  }
})
</script>
