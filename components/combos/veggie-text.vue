<template>
  <p :class="classList">{{ text }}</p>
</template>

<script>
export default {
  name: 'ViewCombosVeggieText',
  data() {
    return {
      text: 'Todos vienen en versión veggie',
      classList: 'h4-responsive montserrat animated fadeInUp text-black-d m-0'
    }
  }
}
</script>
