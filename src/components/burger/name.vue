<template>
  <h3 class="burger-title my-lg-3 bebas ls06">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'BurgerName',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.burger-title {
  font-size: 2.3em;
  text-shadow: 0px 3px 6px rgba(0,0,0,0.16);
}
</style>
