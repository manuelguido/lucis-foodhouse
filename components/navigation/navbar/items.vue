<template>
  <mdb-navbar-toggler class="ml-auto mr-lg-4">
    <mdb-navbar-nav class="text-right" right>
      <NavigationNavbarItem v-for="(item, i) in items" :key="i" :item="item" />
    </mdb-navbar-nav>
  </mdb-navbar-toggler>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { NavItem } from '~/interfaces/navigation'
const mdbvue = require('mdbvue')
const { mdbNavbarToggler, mdbNavbarNav } = mdbvue

export default Vue.extend({
  name: 'NavigationNavbarItems',
  components: {
    mdbNavbarToggler,
    mdbNavbarNav
  },
  data() {
    return {
      items: <PropOptions<NavItem[]>>[
        {
          name: 'Inicio',
          url: '/'
        },
        {
          name: 'Combos',
          url: '/combos'
        },
        {
          name: 'Contacto',
          url: '/contact'
        }
      ]
    }
  }
})
</script>

<style scoped>
@media (max-width: 992px) {
  #main-navbar {
    background: var(--white-a);
  }
  .navbar-toggler-icon {
    margin-right: 1em;
  }
}
</style>
