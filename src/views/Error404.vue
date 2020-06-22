<template>
	<div>
		<div class="container-fluid outer-content w-100 uns error-padding">
			<lucis-header/>
			<mdbRow class="justify-content-center">
				<mdbCol lg="6">
					<h1 class="message-404 bebas white-b">404</h1>
				</mdbCol>
			</mdbRow>
			<mdbRow class="justify-content-center">
				<mdbCol lg="6">
					<h2 class="title-404 bebas mb-5">Up's. Parece que esta url no existe.</h2>
					<router-link to="/" class="back-link bebas">IR AL INICIO</router-link>
				</mdbCol>
			</mdbRow>
		</div>
		<lucis-footer/>
	</div>
</template>

<script>
import { mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'home',
  components: {
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>
.title-404 {
	font-size: 4em;
}
.message-404 {
	font-size: 7em;
}
@media (min-width: 992px){
	.error-padding {
		padding-top: 25vh;
	}
}
@media (max-width: 992px){
	.error-padding {
		padding-top: 20vh;
	}
}
.back-link {
	font-size: 4em;
	color: var(--color-a);
}
.back-link:hover {
	color: var(--black-b);
}

</style>