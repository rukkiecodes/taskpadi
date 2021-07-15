<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product_seller.good_and_product.track_1 == true,
      }"
    >
      <span class="text-caption">1</span>
    </div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_2 == true,
      }"
      class="track mx-2"
    >
      <span class="text-caption">2</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["good_and_product_seller"]),
  },
};
</script>