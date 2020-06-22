<template>
  <mdbCol class="burger animated fadeIn mb-5" col=12 lg=4>
    <mdbRow>
      <!-- Image -->
      <mdbCol col=4>
        <img class="burger-image" :src="require(`@/assets/burgers/${burger.image}`)" />
      </mdbCol>
      <!-- Description -->
      <mdbCol col=8 class="pl-4">
        <h2
          class="burger-title my-lg-3"
          :class="burger.font"
          :style="'font-size:' + burger.size + 'em;'"
        >{{burger.name}}</h2>
        <p class="burger-ingredients majorm black-a">{{burger.ingredients}}</p>
      </mdbCol>
    </mdbRow>
  </mdbCol>
</template>

<script>
  import { mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbRow,
      mdbCol
    },
    props: {
      burger: {}
    }
  }
</script>

<style scoped>
.burger-image {
  width: 105% !important;
}
.burger-title {
  text-shadow: 0px 3px 6px rgba(0,0,0,0.16);
}
.burger-ingredients {
  font-size: .9em;
  text-shadow: 0px 0px .01em var(--black-a);

}
</style>
