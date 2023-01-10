<template>
  <h1 :class="classList">{{ text }}</h1>
</template>

<script>
export default {
  name: 'ViewCombosCombosText',
  data() {
    return {
      text: 'Conocé nuestros combos',
      classList: 'title mb-3 animated fadeIn',
    }
  }
}
</script>
