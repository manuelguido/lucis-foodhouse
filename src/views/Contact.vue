<template>
  <div id="contact-page">
    <div class="container-fluid outer-content w-100 uns">
      <lucis-header/>
      <mdbRow class="mt-5 pt-5">
        <mdb-col col="12" lg="6" class="text-center">
          <h1 class="title mb-5">CONTACTATE CON NOSOTROS</h1>
					<p class="item"><i class="fab fa-whatsapp mr-3 seed-success"></i>2284624049</p>
					<p class="item"><i class="fab fa-instagram mr-3 seed-danger"></i>@lucisfoodhouse</p>
					<p class="item"><i class="fas fa-envelope mr-3 white-d"></i>lucisfoodhouse@gmail.com</p>
        </mdb-col>
				<mdb-col col="12" lg="6" class="text-center">
          <h1 class="title mb-5">DONDE ENCONTRARNOS</h1>
					<p class="item"><i class="fas fa-map-marker-alt mr-3 white-d"></i>OLAVARRÍA, BUENOS AIRES</p>
					<div class="mapouter p-0 m-0">
						<div class="gmap_canvas card">
							<iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
							</iframe>
						</div>
					</div>
        </mdb-col>
      </mdbRow>
    </div>
    <lucis-footer/>
  </div>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue';
import lucisFooter from '@/components/Footer.vue'
import lucisHeader from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    mdbRow,
    mdbCol,
    'lucis-footer': lucisFooter,
    'lucis-header': lucisHeader
  }
}
</script>

<style scoped>
#contact-page .item {
	font-family: 'Bebas Neue', cursive;
	font-size: 2.2em;
	letter-spacing: 0.05em;
}

.mapouter{
	height: 40vh;
	position:relative;
	text-align:left;
	width:100%;}
.gmap_canvas {
	overflow:hidden;
	background:none!important;
	width:80%;
	height:100%;
}
</style>