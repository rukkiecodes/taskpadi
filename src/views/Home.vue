<template>
  <v-container fluid class="pa-0">
    <Nav />
    <Home />
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
// @ts-nocheck
import Nav from "../components/app components/nav/Nav.vue";
import Home from "../components/home/Home.vue";
// import Footer from "../components/app components/Footer.vue";
export default {
  components: {
    Nav,
    Home,
    // Footer,
  },
};
</script>
