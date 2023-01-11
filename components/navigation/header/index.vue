<template>
  <div class="row content">
    <div class="col-12 text-center">
      <NavigationHeaderTitle />
      <NavigationHeaderSubtitle />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationHeader'
})
</script>

<style scoped>
.content {
  padding-top: 10vh !important;
}
</style>
