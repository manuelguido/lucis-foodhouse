<template>
  <ViewImageBackground>
    <div class="main-padding">
      <div class="row">
        <div class="col-12 mb-5">
          <CombosText />
          <CombosVeggieText />
        </div>
      </div>
      <div class="row">
        <BurgerModal
          v-if="currentBurger"
          :burger="currentBurger"
          @modal:close="unsetBurger"
        />
      </div>
      <div class="row">
        <Burger
          v-for="(burger, i) in burgers"
          :key="i"
          :burger="burger"
          @click.native="setCurrentBurger(burger)"
        />
      </div>
    </div>
  </ViewImageBackground>
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
      currentBurger: null as Burger | null,
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
          image: 'clasica.png'
        },
        {
          id: 2,
          name: 'Cheese',
          ingredients: ['Carne', 'Cheddar', 'Pepinillos', 'Tomate', 'Kétchup'],
          image: 'cheese.png'
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
          image: 'pampeana.png'
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
          image: 'blucis.png'
        },
        {
          id: 5,
          name: 'Mario bros',
          ingredients: ['Carne', 'Hongos', 'Cebolla caramelizada', 'Lechuga'],
          image: 'mario.png'
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
          image: 'pesadilla.png'
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
          image: 'yeti.png'
        },
        {
          id: 8,
          name: 'Land of provolon',
          ingredients: [
            'Carne',
            'Queso provoleta (Santa Rosa)',
            'Lechuga',
            'Tomate'
          ],
          image: 'provolon.png'
        },
        {
          id: 9,
          name: 'Halloween',
          ingredients: [
            'Carne (x2)',
            'Queso americano (x2)',
            'Doble panceta',
            'Cebolla caramelizada',
            'Coleslaw',
            'Lechuga'
          ],
          image: 'halloween.webp'
        }
      ]
    }
  },
  methods: {
    setCurrentBurger(burger: Burger): void {
      this.currentBurger = burger
    },
    unsetBurger() {
      this.currentBurger = null
    }
  }
})
</script>
