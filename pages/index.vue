<template>
  <ViewImageBackground center>
    <!-- <div class="inner-flex bg-success"> -->
    <NavigationHeader :delay="animatedDelay" />
    <!-- </div> -->
  </ViewImageBackground>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      animatedDelay: 20 as number
    }
  },
  head() {
    return {
      title: "Luci's FoodHouse"
    }
  }
})
</script>
