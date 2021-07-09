<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track: good_and_product_seller.good_and_product.track_1 == true,
      }"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_2 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_3 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_4 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_5 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_6 == true,
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track: good_and_product_seller.good_and_product.track_7 == true,
      }"
      class="track mx-2"
    ></div>
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