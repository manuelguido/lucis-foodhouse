<template>
  <mdbCol class="mb-5" col=12 lg=4 @click.native="loadModal">
    <div class="burger animated fadeIn">
    <mdbRow>
      <mdbCol col=4>
        <BurgerImage :path="burger.image"/>
      </mdbCol>
      <mdbCol col=8 class="pl-4">
        <BurgerName :text="burger.name" />
        <BurgerIngredients :text="burger.ingredients" />
      </mdbCol>
    </mdbRow>
    </div>
  </mdbCol>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue';
import BurgerImage from '@/components/burger/image.vue'
import BurgerName from '@/components/burger/name.vue'
import BurgerIngredients from '@/components/burger/ingredients.vue'

export default {
  name: 'Burger',
  components: {
    mdbRow,
    mdbCol,
    BurgerImage,
    BurgerName,
    BurgerIngredients
    },
  props: {
    burger: Object,
    default: () => {},
  },
}
</script>

<style scoped>
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