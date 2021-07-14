<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product_buyer.good_and_product.track_1 == true,
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product_buyer.good_and_product.track_2 == true,
      }"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    console.log(
      "good_and_product_buyer",
      this.good_and_product_buyer.good_and_product.activate_back_button
    );
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>