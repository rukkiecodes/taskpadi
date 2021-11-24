<template>
  <v-container class="pa-0 head_container" fluid>
    <canvas class="model"></canvas>
  </v-container>
</template>

<script>
// @ts-nocheck
import init from "./three/model"
export default {
  mounted() {
    this.$nextTick(() => {
      init()
    })
  },
}
</script>

<style scoped>
@import url(./assets/head.css);
</style>
