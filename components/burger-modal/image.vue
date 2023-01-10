<template>
  <div :class="outerClassList">
    <img
      :class="imgClassList"
      :src="require(`~/assets/img/burgers/${path}`)"
      :data-delay="dataDelay"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      outerClassList: 'col-12 col-lg-6 text-center mb-5 mb-lg-0' as string,
      imgClassList: 'animated fadeIn' as string,
      dataDelay: '2.0s' as string
    }
  }
})
</script>

<style scoped>
img {
  border-radius: 16px;
}
</style>
