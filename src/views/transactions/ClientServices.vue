<template>
  <v-container fluid class="pa-0">
    <Nav />
    <ClientServices />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import ClientServices from "../../components/transactions/clientServices/ClientServices.vue"
export default {
  components: {
    Nav,
    ClientServices
  }
}
</script>