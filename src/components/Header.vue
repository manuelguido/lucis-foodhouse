<template>
	<div class="row bg-white-a content pb-5">
		<div class="col-12 text-center">
			<h1 id="main-title" class="mt-4 bebas black-a">LUCI'S FOODOHOUSE</h1>
      <span class="align-middle">
        <i class="fas fa-circle align-middle black-a"></i>
        <h1 id="sub-title" class="align-middle megrim display-inline w300 mx-3">HAMBURGUESAS GOURMET</h1>
        <i class="fas fa-circle align-middle black-a"></i>
      </span>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 10vh !important;
}
/* Titles */
#main-title { letter-spacing: 0.05em; }
@media (min-width: 992px) {
  #main-title { font-size: 4.4em; }
  #sub-title { font-size: 1.8em; }
}
@media (max-width: 992px) {
  #main-title { font-size: 4em; }
  #sub-title { font-size: 1.8em; }
}
.fa-circle {
  font-size: 8px !important;
}
</style>
