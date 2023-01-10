<template>
  <p :class="classList">
    {{ text }}
  </p>
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
      classList: 'h5 majorm black-b ingredients' as string
    }
  }
})
</script>

<style scoped>
.ingredients {
  font-size: 1rem;
  text-shadow: 0px 0px 0.01em var(--black-a);
}
</style>
