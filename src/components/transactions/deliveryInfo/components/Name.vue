<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-text-field
        v-model="goodAndProductBuyer.goodAndProductBuyerInputs.name"
        color="deep-purple accent-4"
        type="email"
        full-width
        outlined
        dense
        label="Product name"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["goodAndProductBuyer"]),
  },
};
</script>
