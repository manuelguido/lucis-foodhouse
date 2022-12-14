<template>
  <p class="burger-ingredients majorm black-a">{{text}}</p>
</template>

<script>
export default {
  name: 'BurgerIngredients',
  props: {
    text: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.burger-ingredients {
  font-size: 1rem;
  text-shadow: 0px 0px .01em var(--black-a);
}
</style>