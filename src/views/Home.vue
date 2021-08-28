<template>
  <v-container fluid class="pa-0">
    <Nav />
    <Home />
    <Footer />
  </v-container>
</template>

<script>
import Nav from "../components/app_components/nav/Nav.vue"
export default {
  components: {
    Nav,
    Home: () => import("../components/home/Home.vue"),
    Footer: () => import("../components/app_components/Footer.vue")
  },
};
</script>
