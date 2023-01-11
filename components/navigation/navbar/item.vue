<template>
  <nuxt-link :class="classList" :to="item.url" active>
    {{ item.name }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { NavItem } from '~/interfaces/navigation'

export default Vue.extend({
  name: 'NavigationNavbarItem',
  props: {
    item: {
      type: Object,
      required: true
    } as PropOptions<NavItem>
  },
  data() {
    return {
      classList: 'nav-link bebas mr-5' as string
    }
  }
})
</script>

<style scoped>
.nav-link {
  color: var(--white-a) !important;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.nav-link:hover {
  color: var(--color-a) !important;
}
.nav-link:active {
  opacity: 0.5;
}

.nav-link:last-child {
  margin-right: 0 !important;
}
</style>
