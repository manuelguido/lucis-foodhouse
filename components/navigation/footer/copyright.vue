<template>
  <div>
    <span class="text-white-c">
      {{ text }}
    </span>
    <TextLink :link="link" target=""/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      text: '© 2019 Copyright: ',
      link: {
        route: '/',
        text: 'Lucis Food House'
      }
    }
  }
})
</script>
