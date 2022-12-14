<template>
  <mdbCol class="burger animated fadeIn mb-5" col=12 lg=4 @click.native="loadModal">
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
// import burgerModal from '@/components/BurgerModal.vue'
// import Vue from 'vue'

export default {
  name: 'Burger',
  components: {
    mdbRow,
    mdbCol
    },
  props: {
    burger: Object
  },
  data () {
    return {
      display_modal: false
    }
  },
  methods: {
    loadModal: function (event) {
      if (event) {
        this.display_modal = true
        // var ComponentClass = Vue.extend(burgerModal)
        // var instance = new ComponentClass()
        // instance.$mount()
        // var container = document.querySelector('#container-' + this.burger.id)
        // container.appendChild(instance.$el)
      }
    }
  }
}
</script>

<style scoped>
.burger {
  cursor: pointer;
  transition: 0.1s all;
}
.burger:hover {
  background: #f8f8f8;
}
.burger:active {
  background: #f1f1f1;
}
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