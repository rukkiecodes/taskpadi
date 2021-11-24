<template>
  <v-container fluid class="pa-0">
    <!-- <Nav /> -->
    <Home />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
// @ts-nocheck
import Nav from "../components/app components/nav/Nav.vue";
import Home from "../components/home/Home.vue";
export default {
  components: {
    Nav,
    Home,
  },
};
</script>
