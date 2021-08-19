<template>
  <v-row justify="space-between" align="start" class="seller_tab">
    <v-col
      class="d-flex justify-start align-center"
      v-for="(card, index) in seller_tab"
      :key="index"
      cols="12"
      sm="6"
    >
      <v-avatar class="mr-3" size="80" color="transparent">
        <img :src="card.image" />
      </v-avatar>
      <span class="grey--text text--darken-4" v-text="card.text" />
    </v-col>
  </v-row>
</template>

<script>
import seller_tab from "./seller_tab"
export default {
  data: () => ({
    seller_tab,
  }),
};
</script>
