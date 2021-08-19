<template>
  <Home />
</template>

<script>
export default {
  components: {
    Home: () => import("../components/home/Home.vue"),
  },
};
</script>
