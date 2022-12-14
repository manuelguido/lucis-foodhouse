<template>
  <img class="burger-image" :src="require(`@/assets/burgers/${path}`)" />
</template>

<script>
export default {
  name: 'BurgerImage',
  props: {
    path: {
      type: String,
      default: '', 
    },
  }
}
</script>

<style scoped>
.burger-image {
  width: 105% !important;
  border-radius: 16px;
}
</style>