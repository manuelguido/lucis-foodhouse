<template>
  <img :src="require(`~/assets/img/burgers/${path}`)" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerImage',
  props: {
    path: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
img {
  width: 105% !important;
  border-radius: 16px;
}
</style>
