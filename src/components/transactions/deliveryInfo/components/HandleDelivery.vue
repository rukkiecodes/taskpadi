<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-select
        :items="items"
        outlined
        dense
        full-width
        color="deep-purple accent-4"
        label="Product condition"
        @change="setHandleDelivery"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    items: ["TrustPaddi", "The Selle"],
  }),
  methods: {
    setHandleDelivery(e) {
      this.goodAndProductBuyer.goodAndProductBuyerInputs.handleDelivery = e;
    },
  },
  computed: {
    ...mapState(["goodAndProductBuyer"]),
  },
};
</script>
