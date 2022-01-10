<template>
  <v-container fluid class="pa-0">
    <Nav />
    <About />
    <Footer />
  </v-container>
</template>

<script>
// @ts-nocheck
import Nav from "../components/app components/nav/Nav.vue";
import About from "../components/about/About.vue";
import Footer from "../components/app components/Footer.vue";
export default {
  components: {
    Nav,
    About,
    Footer,
  },
};
</script>
