<template>
  <div :class="classList">&times;</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BurgerModalClose',
  data() {
    return {
      classList:
        'close-times d-flex justify-content-center align-items-center' as string
    }
  }
})
</script>

<style scoped>
.close-times {
  color: #fff;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.25);
  /* text-shadow: none !important; */
}

.close-times:hover,
.close-times:focus {
  /* color: #eee; */
  text-decoration: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15);
}
</style>
