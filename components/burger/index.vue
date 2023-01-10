<template>
  <div class="mb-5 col-12 col-lg-4" @click="loadModal">
    <div class="burger animated fadeIn">
      <div class="row">
        <div class="col-4">
          <BurgerImage :path="burger.image" />
        </div>
        <div class="col-8 pl-4">
          <BurgerName :text="burger.name" />
          <BurgerIngredients :text="burger.ingredients" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Burger } from '~/interfaces/burger'

export default Vue.extend({
  name: 'Burger',
  props: {
    burger: {
      type: Object,
      required: true
    } as PropOptions<Burger>
  }
})
</script>

<style :lang="scss" scoped>
.burger {
  cursor: pointer;
  transition: 0.2s all;
  border-radius: 16px;
  padding: 1rem;
}
.burger:hover {
  background: #eee;
}
.burger:active {
  background: #f1f1f1;
}
</style>
