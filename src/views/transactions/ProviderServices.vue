<template>
  <v-container fluid class="pa-0">
    <Nav />
    <ProviderServices />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import ProviderServices from "../../components/transactions/providerServices/ProviderServices.vue"
export default {
  components: {
    Nav,
    ProviderServices
  }
}
</script>