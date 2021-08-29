<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-textarea
        v-model="goodAndProductBuyer.goodAndProductBuyerInputs.description"
        color="deep-purple accent-4"
        full-width
        outlined
        dense
        label="Product Description"
      ></v-textarea>
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
