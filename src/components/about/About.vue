<template>
  <v-container fluid class="ma-0 pa-0">
    <Safe_area />
    <Head />
    <About_trustpaddi />
    <Benefits />
    <Better_safe />
    <Footer />
  </v-container>
</template>

<script>
import Safe_area from "../../components/app_components/Safe_area.vue";
import Head from "./components/Head.vue";
import About_trustpaddi from "./components/About_trustpaddi.vue";
import Benefits from "./components/Benefits.vue";
import Better_safe from "../../components/app_components/Better_safe.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Safe_area,
    Head,
    About_trustpaddi,
    Benefits,
    Better_safe,
    Footer,
  },
};
</script>

<style>
</style>