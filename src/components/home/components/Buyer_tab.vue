<template>
  <v-row justify="space-between" align="start" class="buyer_tab">
    <v-col
      class="d-flex justify-start align-center"
      v-for="(card, index) in buyer_tab"
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
import buyer_tab from "./buyer_tab"
export default {
  data: () => ({
    buyer_tab,
  }),
};
</script>
