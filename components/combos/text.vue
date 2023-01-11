<template>
  <h1 :class="classList">{{ text }}</h1>
</template>

<script>
export default {
  name: 'ViewCombosCombosText',
  data() {
    return {
      text: 'Conocé nuestros combos',
      classList: 'title mb-2 animated fadeInUp text-white-a',
    }
  }
}
</script>
