<template>
  <mdb-navbar-toggler class="ml-auto">
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
          name: 'Nuestras hamburguesas',
          url: '/our-burgers'
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
