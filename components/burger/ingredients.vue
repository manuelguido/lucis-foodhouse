<template>
  <div>
    <p v-for="(ing, i) in ingredients" :key="i" :class="classList">
      {{ ing }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  name: 'BurgerIngredients',
  props: {
    ingredients: {
      type: Array,
      default: () => []
    } as PropOptions<string[]>
  },
  data() {
    return {
      classList: 'h5-responsive majorm text-white-a text-lowercase' as string
    }
  }
})
</script>
