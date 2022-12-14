<template>
  <h2 :class="classList">{{ text }}</h2>
</template>

<script>
export default {
  data() {
    return {
      text: "Todos los combos vienen en versión veggie"
    }
  }
}
</script>
