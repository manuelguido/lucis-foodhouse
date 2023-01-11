<template>
  <p class="my-0 py-0">
    {{ copyrightText }}
    <nuxt-link class="primary" to="/contact">{{ mainText }}</nuxt-link>
    {{ rightsText }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FooterCredits',
  data() {
    return {
      copyrightText: '© 2020' as string,
      mainText: "Luci's Food House" as string,
      rightsText: 'Todos los derechos reservados.' as string
    }
  }
})
</script>

<style scoped>
p {
  color: var(--color-a);
  font-size: 13px;
  font-weight: 600;
  /* text-shadow: 1px 1px 2px var(--black-d); */
}
a {
  color: var(--seed-danger);
}
a:hover,
a:active {
  color: var(--seed-danger-dark);
}
</style>
