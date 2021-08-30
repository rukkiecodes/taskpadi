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
        @change="setCondition"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    items: ["Brand new", "Firly used", "Belgium"],
  }),
  methods: {
    setCondition(e) {
      this.goodAndProductSeller.goodAndProductSellerInputs.condition = e
    }
  },
  computed: {
    ...mapState(["goodAndProductSeller"]),
  },
};
</script>
