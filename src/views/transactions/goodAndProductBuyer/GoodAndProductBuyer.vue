<template>
  <v-container fluid class="pa-0">
    <Nav />
    <GoodAndProductBuyer />
  </v-container>
</template>

<script>
// @ts-nocheck
import Nav from "../../../components/app_components/nav/Nav.vue";
import GoodAndProductBuyer from "../../../components/transactions/goodAndProductBuyer/GoodAndProductBuyer.vue"
export default {
  components: {
    Nav,
    GoodAndProductBuyer
  },
};
</script>
