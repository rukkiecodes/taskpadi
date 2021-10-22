<template>
  <v-container fluid class="pa-0">
    <Nav />
    <TraderCrypto class="my-16" />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import TraderCrypto from "../../components/transactions/traderCrypto/TraderCrypto.vue"
export default {
  components: {
    Nav,
    TraderCrypto
  }
}
</script>