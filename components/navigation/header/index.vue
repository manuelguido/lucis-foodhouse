<template>
  <div class="row bg-white-a content pb-5">
    <div class="col-12 text-center">
      <h1 id="main-title" class="mt-5 mt-lg-4 bebas black-a">
        {{ title }}
      </h1>
      <span class="align-middle">
        <i class="fas fa-circle align-middle black-a"></i>
        <h1
          id="sub-title"
          class="align-middle megrim display-inline w300 mx-2 mx-lg-3"
        >
          {{ subtitle }}
        </h1>
        <i class="fas fa-circle align-middle black-a"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationHeader',
  data() {
    return {
      title: "LUCI'S FOOD HOUSE" as string,
      subtitle: 'HAMBURGUESAS GOURMET' as string
    }
  }
})
</script>

<style scoped>
.content {
  padding-top: 10vh !important;
}
/* Titles */
#main-title {
  letter-spacing: 0.05em;
}
@media (min-width: 992px) {
  #main-title {
    font-size: 4.4em;
  }
  #sub-title {
    font-size: 1.8em;
  }
}
@media (max-width: 992px) {
  #main-title {
    font-size: 3.2em;
  }
  #sub-title {
    font-size: 1.6em;
  }
}
@media (max-width: 762px) {
  #main-title {
    font-size: 2.8em;
  }
  #sub-title {
    font-size: 1.3em;
  }
}
.fa-circle {
  font-size: 8px !important;
}
</style>
