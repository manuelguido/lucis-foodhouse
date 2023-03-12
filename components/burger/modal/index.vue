<template>
  <div v-if="burger != null" class="modal" @click="hideModal">
    <div class="modal-content" @click="handleClick">
      <div class="row">
        <!-- <div class="col-12 text-right">
          <div class="close" @click="hideModal">&times;</div>
        </div> -->
        <div class="col-12 col-md-7 col-lg-6 col-xl-5 mb-5 mb-md-0">
          <BurgerImage :path="burger.image" />
        </div>

        <div class="col-12 col-md-5 col-lg-6 col-xl-7">
          <div class="d-flex justify-content-between align-items-top mb-4">
            <BurgerTitle :text="burger.name" />
            <BurgerModalClose @click.native="hideModal" />
          </div>
          <div class="d-flex">
            <BurgerIngredients :ingredients="burger.ingredients" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Burger } from '~/interfaces/burger'

export default Vue.extend({
  name: 'BurgerModal',
  props: {
    burger: {
      type: Object,
      required: false,
      default: null
    } as PropOptions<Burger>
  },
  methods: {
    handleClick(event: Event) {
      event.stopPropagation()
    },
    hideModal(event: Event): void {
      this.$emit('modal:close', true)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_glassmorphism.scss';

/* Modal */
.modal {
  @include glassBlackLight;
  display: block;
  position: fixed;
  z-index: 1080 !important;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

/* Modal Content */
.modal-content {
  @include glassWhiteDark;
  border-radius: 16px;

  margin: auto !important;
  padding: 2rem;
}

@media screen and (min-width: 1200px) {
  .modal-content {
    width: 50%;
  }
  .burger-title {
    font-size: 3.5em;
  }
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
  .modal-content {
    width: 65%;
  }
  .burger-title {
    font-size: 3.5em;
  }
}
@media screen and (max-width: 992px) {
  .modal-content {
    width: 95%;
  }
  .burger-title {
    font-size: 2em;
  }
}
</style>
