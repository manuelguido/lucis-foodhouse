<template>
  <div class="combos-page">
    <div class="container-fluid outer-content uns">
      <LucisHeader />
      <div class="row">
        <div class="col-12 col-lg-6 my-4 my-lg-5 pt-4">
          <CombosText />
          <VeggieText />
        </div>
      </div>
      <div class="row">
        <BurgerModal :burger="currentBurguer" />
      </div>
      <div class="row mt-3">
        <Burguer
          v-for="b in burgers"
          :key="b.name"
          :burger="b"
          @click.native="currentBurger(b)"
        />
      </div>
    </div>
    <LucisFooter />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Burger } from '~/interfaces/burger'

export default Vue.extend({
  name: 'OurBurguersPage',
  head() {
    return {
      title: 'Nuestras hamburguesas'
    }
  },
  data() {
    return {
      currentBurguer: null as Burger | null,
      veggieText: 'Todos los combos vienen en versión veggie' as string,
      burgers: <PropOptions<Burger[]>>[
        {
          id: 1,
          name: 'Clásica',
          ingredients:
            'carne, cheddar, panceta, cebolla caramelizada, cebolla morada, lechuga.',
          image: 'clasica.webp'
        },
        {
          id: 2,
          name: 'Cheese burger',
          ingredients: 'carne, cheddar, pepinillos, tomate, kétchup.',
          image: 'cheese.webp'
        },
        {
          id: 3,
          name: 'Pampeana',
          ingredients:
            'carne, mozarella, morrón asado, tomate asado, pepinillos, rúcula',
          image: 'pampeana.webp'
        },
        {
          id: 4,
          name: "Bluci's",
          ingredients:
            'carne, queso azul, panceta, cebolla caramelizada, cebolla morada, lechuga.',
          image: 'blucis.webp'
        },
        {
          id: 5,
          name: 'Mario bros',
          ingredients: 'carne, hongos, cebolla caramelizada, lechuga',
          image: 'mario.webp'
        },
        {
          id: 6,
          name: 'Pesadilla',
          ingredients:
            'carne (triple o cuádruple), cheddar (x3 o x4), tomate, bbq, lechuga',
          image: 'pesadilla.webp'
        },
        {
          id: 7,
          name: 'Yeti',
          ingredients:
            'doble carne, doble cheddar, doble queso americano, doble panceta, cebolla caramelizada, cebolla morada, bbq, lechuga',
          image: 'yeti.webp'
        }
      ]
    }
  },
  methods: {
    currentBurger(burger: Burger): void {
      this.currentBurguer = null
      this.currentBurguer = burger
    },
    showModal(id: number): void {
      alert(id)
    }
  }
})
</script>

<style scoped>
.container-fluid {
  padding: 0 6vw 40px 6vw;
}
.table-image {
  margin-top: -160px;
  margin-right: -60px;
  width: 440px;
}
@media (min-width: 992px) {
  .combo-subtitle {
    font-size: 28px;
  }
}
@media (max-width: 992px) {
  .combo-subtitle {
    font-size: 23px;
  }
}
</style>
