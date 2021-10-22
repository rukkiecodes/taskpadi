<template>
  <v-container fluid class="pa-0">
    <Nav />
    <GoodAndProductSeller class="my-16" />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import GoodAndProductSeller from "../../components/transactions/goodAndProductSeller/GoodAndProductSeller.vue"
export default {
  components: {
    Nav,
    GoodAndProductSeller
  }
}
</script>