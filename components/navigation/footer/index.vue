<template>
  <div class="footer">
    <div class="mr-3">
      <NavigationFooterCopyright />
    </div>

    <NavigationFooterAuthor />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_glassmorphism.scss';

.footer {
  @include glassBlackLight;

  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}

@media screen and (min-width: 992px) {
  .footer {
    padding: 1rem 8rem;
  }
}

@media screen and (max-width: 992px) {
  .footer {
    padding: 1rem 2rem;
  }
}
</style>
