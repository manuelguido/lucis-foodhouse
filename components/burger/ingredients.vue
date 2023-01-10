<template>
  <p :class="classList">{{ text }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerIngredients',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classList: 'burger-ingredients majorm black-a' as string
    }
  }
})
</script>

<style scoped>
.burger-ingredients {
  font-size: 1rem;
  text-shadow: 0px 0px 0.01em var(--black-a);
}
</style>
