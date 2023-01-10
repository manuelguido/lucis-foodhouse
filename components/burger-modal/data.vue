<template>
  <div :class="classList">
    <BurgerName :text="name" />
    <BurgerIngredients :text="ingredients" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerModalData',
  props: {
    name: {
      type: String,
      default: ''
    },
    ingredients: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      classList: 'col-12 col-lg-6' as string
    }
  }
})
</script>
