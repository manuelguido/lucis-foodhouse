<template>
  <!-- Footer -->
  <mdb-footer id="footer">
    <div class="footer-copyright text-center py-4 bg-color-a">
      <mdb-container fluid>
        <mdb-row class="px-lg-5 px-md-4 justify-content-center">
          <mdb-col lg="6" class="text-left">
            <p class="my-0 py-0">© 2020 <a class="primary" href="/">Luci's Food House</a> Todos los derechos reservados.</p>
          </mdb-col>
          <mdb-col lg="6" class="text-left text-lg-right">
            <p class="my-0 py-0">Diseñado y desarrollado por: <a href="https://zebradevs.com/" target="_blank">Zebra Devs</a></p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>
#footer {
  margin: 0 !important;
}
.footer-copyright {
  width: 100vw !important;
}
@media (min-width: 992px) {
  .footer-copyright {
    height: 70px;
  }
}
.footer-copyright p {
  color: var(--white-a);
  font-weight: 600;
  text-shadow: 1px 1px 2px var(--black-c);
}
.footer-copyright a {
  color: var(--seed-link);
}
.footer-copyright a:hover,
.footer-copyright a:active {
  color: var(--seed-link-dark);
}
</style>