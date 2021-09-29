<template>
  <v-container fluid class="pa-0">
    <Head />
    <Introducing />
    <HowItWorks />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue"),
    Introducing: () => import("./components/Introducing.vue"),
    HowItWorks: () => import("./components/HowItWorks.vue"),
  },
};
</script>
