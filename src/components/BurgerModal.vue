<template>
  <div v-if="show_burger != null" class="modal"> <!-- :class="{ 'display-block': display }">-->
    <!-- Modal content -->
    <div class="modal-content">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-12 text-right">
            <div class="close" @click="hideModal">&times;</div>
          </div>
          <div class="col-12 pt-4 pb-5 px-lg-5">
            <div class="row h-100">
              <div class="col-12 col-lg-6 text-center mb-5 mb-lg-0">
                <img class="burger-image animated fadeIn" :src="require(`@/assets/burgers/${show_burger.image}`)" data-delay="2.0s" />
              </div>
              <div class="col-12 col-lg-6">
                <h1 class="burger-title bebas ls06 mb-4 mb-lg-5">{{show_burger.name}}</h1>
                <p class="h5 majorm black-b ingredients">{{show_burger.ingredients}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerModal',
  props: {
    burger: Object
  },
  data () {
    return {
      show_burger: null
    }
  },
  methods: {
    hideModal: function (event) {
      if (event) {
        this.show_burger = null
        this.burger = null
      }
    }
  },
  watch: {
    burger: function () {
      this.show_burger = this.burger
      console.log('actual: ' + this.burger.name + ' d: ' + this.show_burger)
    }
  }
}
</script>

<style scoped>

/* Modal */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1080 !important; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  display: block;
  background-color: #fefefe;
  margin: auto !important;
  padding: 20px;
  border: 1px solid #888;
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
  text-shadow: 0px 3px 6px rgba(0,0,0,0.16);
}
.ingredients {
  text-shadow: 0px 0px .01em var(--black-a);
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