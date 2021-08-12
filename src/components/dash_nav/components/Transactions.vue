<template>
  <v-list-group
    no-action
    prepend-icon="mdi-bank-outline"
    class="mt-3"
    color="white"
    active-class="white blue--text text--accent-4 rounded-lg"
  >
    <template v-slot:activator>
      <v-list-item-title class="white--text">Transactions</v-list-item-title>
    </template>
    <v-list-item color="white" link>
      <v-list-item-title>Goods/products</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-shopping-outline</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item color="white" link>
      <v-list-item-title>Cryptos</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-bitcoin</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item color="white" link>
      <v-list-item-title>Services</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-room-service-outline</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {};
</script>

<style></style>
