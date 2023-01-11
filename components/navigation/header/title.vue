<template>
  <h1 class="h1-responsive bebas white-a">
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
      classList: '' as string
    }
  }
})
</script>
