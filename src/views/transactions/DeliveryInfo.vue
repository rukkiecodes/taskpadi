<template>
  <v-container fluid class="pa-0">
    <Nav />
    <DeliveryInfo />
  </v-container>
</template>

<script>
import Nav from "../../components/app components/nav/Nav.vue"
import DeliveryInfo from "../../components/transactions/deliveryInfo/DeliveryInfo.vue"
export default {
  components: {
    Nav,
    DeliveryInfo
  }
}
</script>