<template>
  <div class="combos-page">
    <div class="container-fluid outer-content uns">
      <lucis-header/>
			<mdbRow>
				<mdbCol col=12 lg=6 class="my-4 my-lg-5 pt-4">
					<h1 class="title mb-3 animated fadeIn">Conocé nuestros combos</h1>
					<h2 class="combo-subtitle montserrat animated fadeIn">Todos los combos vienen en versión veggie*</h2>
				</mdbCol>
				<mdbCol col=12 lg=6 class="text-right">
					<img class="table-image mobile-hide" src="../assets/table.webp">
				</mdbCol>
			</mdbRow>
			<mdbRow class="mt-3">
				<!-- <mdbCol col=12>
					<i @click="moveCarousel(-1)" class="fas fa-chevron-left fa-lg arrow left-arrow"></i>
					<i @click="moveCarousel(1)" class="fas fa-chevron-right fa-lg arrow right-arrow"></i>
				</mdbCol> -->
				<burger
					v-for="burger in burgers"
					:key="burger.name"
					:burger=burger
				></burger>
			</mdbRow>
    </div>
    <lucis-footer/>
  </div>
</template>

<script>
import { mdbCol, mdbRow } from 'mdbvue';
import lucisFooter from '@/components/Footer.vue'
import lucisHeader from '@/components/Header.vue'
import burger from '@/components/Burger.vue'

export default {
  name: 'home',
  components: {
		mdbRow,
		mdbCol,
    'lucis-footer': lucisFooter,
		'lucis-header': lucisHeader,
		burger
	},
	data () {
		return {
			burgers: [
				{
					name: 'Clásica',
					ingredients: 'carne, cheddar, panceta, cebolla caramelizada, cebolla morada, lechuga.',
					font: 'bebas ls06',
					size: '2.3',
					image: 'clasica.webp'
				},
				{
					name: 'Cheese burger',
					ingredients: 'carne, cheddar, pepinillos, tomate, kétchup.',
					font: 'bebas ls06',
					size: '2.3',
					image: 'cheese.webp'
				},
				{
					name: 'Pampeana',
					ingredients: 'carne, mozarella, morrón asado, tomate asado, pepinillos, rúcula',
					font: 'bebas ls06',
					size: '2.3',
					image: 'pampeana.webp'
				},
				{
					name: "Bluci's",
					ingredients: 'carne, queso azul, panceta, cebolla caramelizada, cebolla morada, lechuga.',
					font: 'bebas ls06',
					size: '2.3',
					image: 'blucis.webp'
				},
				{
					name: 'Mario bros',
					ingredients: 'hongos, hamburguesa 250gr rostbeef, cebolla caramelizada, lechuga',
					font: 'bebas ls06',
					size: '2.3',
					image: 'mario.webp'
				},
				{
					name: 'Pesadilla de cormillot',
					ingredients: 'carne (triple o cuádruple), cheddar (x3 o x4), tomate, bbq, lechuga',
					font: 'bebas ls06',
					size: '2.3',
					image: 'pesadilla.webp'
				},
				{
					name: 'Yeti',
					ingredients: 'doble carne, doble cheddar, doble queso americano, doble panceta, cebolla caramelizada, cebolla morada, bbq, lechuga',
					font: 'bebas ls06',
					size: '2.3',
					image: 'yeti.webp'
				},
				{
					name: 'Especial halloween',
					ingredients: 'hongos, hamburguesa 250gr rostbeef, cebolla caramelizada, lechuga',
					font: 'nosifer',
					size: '1.3',
					image: 'halloween.webp'
				}
			]
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

.arrow {
	color: var(--black-c);
	cursor: pointer;
	z-index: 10000;
	position: absolute;
	top: 180px !important;
	/* transform: translateY(-50%) !important; */
}
.arrow:hover {
	color: var(--color-a);
}
.left-arrow {
	left: -70px;
}
.right-arrow {
	right: -70px;
}
</style>
