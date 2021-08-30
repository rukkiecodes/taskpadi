<template>
  <v-container fluid class="pa-0">
    <Nav />
    <CustumerCrypto />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import CustumerCrypto from "../../components/transactions/custumerCrypto/CustumerCrypto.vue"
export default {
  components: {
    Nav,
    CustumerCrypto
  }
}
</script>