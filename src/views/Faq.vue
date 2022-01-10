<template>
  <v-container fluid class="pa-0">
    <Nav />
    <Faq />
    <Footer />
  </v-container>
</template>

<script>
// @ts-nocheck
import Nav from "../components/app components/nav/Nav.vue";
import Faq from "../components/faq/Faq.vue";
import Footer from "../components/app components/Footer.vue";
export default {
  components: {
    Nav,
    Faq,
    Footer,
  },
};
</script>
