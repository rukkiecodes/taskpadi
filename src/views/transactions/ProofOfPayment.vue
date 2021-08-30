<template>
  <v-container fluid class="pa-0">
    <Nav />
    <ProofOfPayment />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import ProofOfPayment from "../../components/transactions/proofOfPayment/ProofOfPayment.vue"
export default {
  components: {
    Nav,
    ProofOfPayment
  }
}
</script>