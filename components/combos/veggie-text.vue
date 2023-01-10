<template>
  <h1 :class="classList">{{ text }}</h1>
</template>

<script>
export default {
  name: 'ViewCombosVeggieText',
  data() {
    return {
      text: 'Todos los combos vienen en versión veggie',
      classList: 'combo-subtitle montserrat animated fadeIn',
    }
  }
}
</script>
