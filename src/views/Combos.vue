<template>
  <div class="combos-page">
    <div class="container-fluid outer-content uns">
      <LucisHeader/>
			<mdbRow>
				<mdbCol col=12 lg=6 class="my-4 my-lg-5 pt-4">
					<CombosText />
					<VeggieText />
				</mdbCol>
			</mdbRow>
			<mdbRow>
				<BurgerModal :burger=currentBurguer />
			</mdbRow>
			<mdbRow class="mt-3">
				<Burguer v-for="b in burgers" :key="b.name" :burger=b @click.native="currentBurger(b)" />
			</mdbRow>
    </div>
    <LucisFooter/>
  </div>
</template>

<script>
import { mdbCol, mdbRow } from 'mdbvue';
import LucisFooter from '@/components/Footer.vue'
import LucisHeader from '@/components/Header.vue'
import Burguer from '@/components/burger/index.vue'
import BurgerModal from '@/components/BurgerModal.vue'
import VeggieText from '@/components/view/combos/veggieText.vue'
import CombosText from '@/components/view/combos/combosText.vue'

export default {
  name: 'home',
  components: {
		mdbRow,
		mdbCol,
    LucisFooter,
		LucisHeader,
		Burguer,
		BurgerModal,
    CombosText,
		VeggieText
	},
	data () {
		return {
			currentBurguer: null,
			veggieText: 'Todos los combos vienen en versión veggie',
			burgers: [
				{
					id: 1,
					name: 'Clásica',
					ingredients: 'carne, cheddar, panceta, cebolla caramelizada, cebolla morada, lechuga.',
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
					ingredients: 'carne, mozarella, morrón asado, tomate asado, pepinillos, rúcula',
					image: 'pampeana.webp'
				},
				{
					id: 4,
					name: "Bluci's",
					ingredients: 'carne, queso azul, panceta, cebolla caramelizada, cebolla morada, lechuga.',
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
					ingredients: 'carne (triple o cuádruple), cheddar (x3 o x4), tomate, bbq, lechuga',
					image: 'pesadilla.webp'
				},
				{
					id: 7,
					name: 'Yeti',
					ingredients: 'doble carne, doble cheddar, doble queso americano, doble panceta, cebolla caramelizada, cebolla morada, bbq, lechuga',
					image: 'yeti.webp'
				}
			]
		}
	},
	methods: {
		currentBurger (burger) {
			this.currentBurguer = null
			this.currentBurguer = burger
		},
		showModal (id) {
			alert(id)
		}
	}
}
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
