<template>
  <ViewIndexImageBackground :delay="animatedDelay">
    <div class="inner-flex">
      <NavigationHeader :delay="animatedDelay" />
    </div>
  </ViewIndexImageBackground>
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

<style scoped>
.inner-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
