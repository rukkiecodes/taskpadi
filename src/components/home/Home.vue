<template>
  <v-container fluid class="pa-0">
    <Head />
    <Introducing />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue"),
    Introducing: () => import("./components/Introducing.vue")
  },
};
</script>
