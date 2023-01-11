<template>
  <div class="fw-600">
    <span class="text-white-c">
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
      text: '© 2019 Copyright: ',
      link: {
        route: 'https://lucisfoodhouse.com',
        text: 'Lucis Food House'
      }
    }
  }
})
</script>
