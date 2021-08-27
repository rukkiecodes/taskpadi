<template>
  <v-container fluid class="pa-0 deep-purple lighten-5">
    <Nav />
    <Home />
  </v-container>
</template>

<script>
import Nav from "../components/app_components/nav/Nav.vue"
export default {
  components: {
    Nav,
    Home: () => import("../components/home/Home.vue"),
  },
};
</script>
