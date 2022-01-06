<template>
  <div class="heading">
    <h1>{{ h1 }}</h1>
    <p>{{ p }}</p>
  </div>
</template>

<script>
export default {
  props: {
    h1: String,
    p: String,
  },
};
</script>

<style scoped>
@import url(./assets/heading.css)
</style>