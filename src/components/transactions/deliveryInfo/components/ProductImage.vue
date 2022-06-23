<template>
  <v-card flat>
    <v-card-text class="mx-0 px-0">
      <v-file-input
        dense
        counter
        multiple
        outlined
        show-size
        clearable
        full-width
        truncate-length="22"
        label="Product Image"
        prepend-icon="mdi-image-outline"
        @change="setDeliveryInfoProductImage"
      ></v-file-input>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    image: [],
  }),
  methods: {
    setDeliveryInfoProductImage(e) {
      this.deliveryInfo.deliveryInfoInputs.productImage.push(e)
    },
  },
  computed: {
    ...mapState(["deliveryInfo"]),
  },
};
</script>
