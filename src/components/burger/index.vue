<template>
  <mdbCol class="mb-5" col=12 lg=4 @click.native="loadModal">
    <div class="burger animated fadeIn">
    <mdbRow>
      <mdbCol col=4>
        <BurgerImage :path="burger.image"/>
      </mdbCol>
      <mdbCol col=8 class="pl-4">
        <h2
          class="burger-title my-lg-3"
          :class="burger.font"
          :style="'font-size:' + burger.size + 'em;'"
        >
          {{burger.name}}
        </h2>
        <p class="burger-ingredients majorm black-a">{{burger.ingredients}}</p>
      </mdbCol>
    </mdbRow>
    </div>
  </mdbCol>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue';
import BurgerImage from '@/components/burger/image.vue'

export default {
  name: 'Burger',
  components: {
    mdbRow,
    mdbCol,
    BurgerImage
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
  transition: 0.1s all;
  border-radius: 16px;
}
.burger:hover {
  background: #f8f8f8;
}
.burger:active {
  background: #f1f1f1;
}
.burger-title {
  text-shadow: 0px 3px 6px rgba(0,0,0,0.16);
}
.burger-ingredients {
  font-size: .9em;
  text-shadow: 0px 0px .01em var(--black-a);
}
</style>