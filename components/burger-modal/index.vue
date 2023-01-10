<template>
  <div v-if="show_burger != null" class="modal">
    <div class="modal-content">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 text-right">
            <div class="close" @click="hideModal">&times;</div>
          </div>
          <div class="col-12 pt-4 pb-5 px-lg-5">
            <div class="row h-100">
              <BurgerImage :path="show_burger.image" />
              <BurgerData
                :name="show_burger.name"
                :ingredients="show_burger.ingredients"
              />
            </div>
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
      required: true
    } as PropOptions<Burger>
  },
  data() {
    return {
      show_burger: null as Burger | null
    }
  },
  watch: {
    burger() {
      this.show_burger = this.burger
      console.log('actual: ' + this.burger.name + ' d: ' + this.show_burger)
    }
  },
  methods: {
    hideModal(event: Event): void {
      if (event) {
        this.show_burger = null
        // this.burger = null
      }
    }
  }
})
</script>

<style scoped>
/* Modal */
.modal {
  display: block;
  position: fixed;
  z-index: 1080 !important;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.05);
}

/* Modal Content */
.modal-content {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.69);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14.5px);
  -webkit-backdrop-filter: blur(14.5px);

  margin: auto !important;
  padding: 20px;
  border: 0 none;
  /* min-height: 70vh; */
}

/* The Close Button */
.close {
  color: #888;
  float: right;
  font-size: 32px;
  padding: 3px 10px;
  width: 40px;
  height: 40px;
  border-radius: 500px;
}

.close:hover,
.close:focus {
  color: var(--black-a);
  text-decoration: none;
  cursor: pointer;
  background: #eee;
}

.burger-image {
  max-width: 100%;
  height: 100% !important;
}
.burger-title {
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.ingredients {
  text-shadow: 0px 0px 0.01em var(--black-a);
}

@media (min-width: 992px) {
  .modal-content {
    width: 70%;
  }
  .burger-title {
    font-size: 3.6em;
  }
}
@media (max-width: 992px) {
  .modal-content {
    width: 95%;
  }
  .burger-title {
    font-size: 2em;
  }
}
</style>
