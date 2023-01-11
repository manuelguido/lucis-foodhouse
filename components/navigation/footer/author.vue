<template>
  <div>
    <span class="footer-author text-white-a">
      {{ text }}
    </span>
    <TextLink :link="link" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      text: 'Developed by: ',
      link: {
        route: 'https://manuelguido.dev',
        text: 'Manuel Guido'
      }
    }
  }
})
</script>
