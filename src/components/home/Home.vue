<template>
  <v-container fluid class="pa-0">
    <Head />
  </v-container>
</template>

<script>
export default {
  components: {
    Head: () => import("./components/Head.vue")
  },
};
</script>
