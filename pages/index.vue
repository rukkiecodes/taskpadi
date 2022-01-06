<template>
  <Home />
</template>

<script>
export default {
  name: "HomePage",

  mounted() {
    this.$nextTick(() => {
      document.querySelector("body").style.margin = "0px";
    });
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
