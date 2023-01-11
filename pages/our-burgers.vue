<template>
  <ViewOurBurgersImageBackground>
    <div class="main-padding pt-5">
      <div class="row">
        <div class="col-12 mb-5">
          <CombosText />
          <CombosVeggieText />
        </div>
      </div>
      <div class="row">
        <BurgerModal :burger="currentBurguer" />
      </div>
      <div class="row">
        <Burger
          v-for="(burger, i) in burgers"
          :key="i"
          :burger="burger"
          @click.native="currentBurger(burger)"
        />
      </div>
    </div>
  </ViewOurBurgersImageBackground>
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
          ingredients: [
            'Carne',
            'Cheddar',
            'Panceta',
            'Cebolla caramelizada',
            'Cebolla morada',
            'Lechuga'
          ],
          image: 'clasica.webp'
        },
        {
          id: 2,
          name: 'Cheese',
          ingredients: ['Carne', 'Cheddar', 'Pepinillos', 'Tomate', 'Kétchup'],
          image: 'cheese.webp'
        },
        {
          id: 3,
          name: 'Pampeana',
          ingredients: [
            'Carne',
            'Mozarella',
            'Morrón asado',
            'Tomate asado',
            'Pepinillos',
            'Rúcula'
          ],
          image: 'pampeana.webp'
        },
        {
          id: 4,
          name: "Bluci's",
          ingredients: [
            'Carne',
            'Queso azul',
            'Panceta',
            'Cebolla caramelizada',
            'Cebolla morada',
            'Lechuga.'
          ],
          image: 'blucis.webp'
        },
        {
          id: 5,
          name: 'Mario bros',
          ingredients: ['Carne', 'Hongos', 'Cebolla caramelizada', 'Lechuga'],
          image: 'mario.webp'
        },
        {
          id: 6,
          name: 'Pesadilla',
          ingredients: [
            'Carne (x3 o x4)',
            'Cheddar (x3 o x4)',
            'Tomate',
            'BBQ',
            'Lechuga'
          ],
          image: 'pesadilla.webp'
        },
        {
          id: 7,
          name: 'Yeti',
          ingredients: [
            'Carne (x2)',
            'Cheddar (x2)',
            'Queso americano (x2)',
            'Doble panceta',
            'Cebolla caramelizada',
            'Cebolla morada',
            'BBQ',
            'Lechuga'
          ],
          image: 'yeti.webp'
        }
      ]
    }
  },
  methods: {
    currentBurger(burger: Burger): void {
      this.currentBurguer = null
      this.currentBurguer = burger
      this.showModal(burger.id)
    },
    showModal(id: number): void {}
  }
})
</script>
