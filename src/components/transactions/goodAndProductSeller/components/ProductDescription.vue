<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-textarea
        v-model="goodAndProductSeller.goodAndProductSellerInputs.description"
        color="deep-purple accent-4"
        full-width
        outlined
        dense
        label="Product description"
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["goodAndProductSeller"]),
  },
};
</script>
