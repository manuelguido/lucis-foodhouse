<template>
  <div class="combos-page">
    <div class="container-fluid outer-content w-100 uns">
      <lucis-header/>
    </div>
    <lucis-footer/>
  </div>
</template>

<script>
import lucisFooter from '@/components/Footer.vue'
import lucisHeader from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    'lucis-footer': lucisFooter,
    'lucis-header': lucisHeader
  }
}
</script>
