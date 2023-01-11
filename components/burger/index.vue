<template>
  <div class="col-6 col-lg-3 mb-lg-5 mb-4 uns">
    <div class="burger animated fadeIn">
      <div class="row">
        <div class="col-12 mb-3">
          <BurgerImage :path="burger.image" />
        </div>
        <div class="col-12">
          <BurgerTitle :text="burger.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Burger } from '~/interfaces/burger'

export default Vue.extend({
  name: 'Burger',
  props: {
    burger: {
      type: Object,
      required: true
    } as PropOptions<Burger>
  }
  // computed: {
  //   route(): Object {
  //     const self = this
  //     return { name: 'burger', params: { burger: self.burger } }
  //   }
  // },
  // methods: {
  //   navigate(): void {
  //     this.$router.push(this.route)
  //   }
  // }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_glassmorphism.scss';

@media screen and (max-width: 922px) {
  .col-6:nth-child(even) {
    padding-left: 2vw;
  }

  .col-6:nth-child(odd) {
    padding-right: 2vw;
  }
}

.burger {
  @include glassWhiteLight;
  cursor: pointer;
  transition: 0.2s all;
  border-radius: 16px;
  padding: 1rem;
}
.burger:hover {
  @include glassWhiteLight;
  transform: scale(1.05);
}
.burger:active {
  @include glassWhiteDark;
  transform: scale(1.08);
}
</style>
