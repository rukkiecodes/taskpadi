<template>
  <About />
</template>

<script>
export default {
  components: {
    About: () => import("../components/about/About.vue"),
  },
};
</script>
