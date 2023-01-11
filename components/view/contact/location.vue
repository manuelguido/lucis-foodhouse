<template>
  <div>
    <ViewContactTitle :text="title" />
    <p class="h4-responsive text-white-a">
      <i class="fas fa-map-marker-alt mr-2 white-d"></i>
      <span class="bebas fw-300 ls-5">OLAVARRÍA, BUENOS AIRES</span>
    </p>
    <!-- <Map /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: 'Donde encontrarnos'
    }
  }
})
</script>
