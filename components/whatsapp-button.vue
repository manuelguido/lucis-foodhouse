<template>
  <a :href="url" :class="buttonClass" :target="urlTarget">
    <i class=""></i>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WhatsappButton',
  data() {
    return {
      url: 'https://api.whatsapp.com/send?phone=+5492284624049' as string,
      urlTarget: '_blank' as string,
      iconClass: 'fab fa-whatsapp' as string,
      buttonClass: 'float-whatsapp' as string
    }
  }
})
</script>

<style lang="scss" scoped>
.float-whatsapp {
  background-color: var(--seed-success-dark);
  border-radius: 50px;
  bottom: 3vh;
  box-shadow: 0 0.07em 0.15em 0.1em rgba(0, 0, 0, 0.25) !important;
  font-size: 30px;
  height: 2em;
  position: fixed;
  right: 3vh;
  text-align: center;
  width: 2em;
  z-index: 100;
}

.float-whatsapp i {
  color: #fff !important;
  margin-top: 0.5em !important;
}
</style>
