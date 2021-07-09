<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_seller.good_and_product.track_1 == true ||
          good_and_product_seller.good_and_product.buyer_email != '',
      }"
    ></div>
    <div
      :class="{
        active_track:
          good_and_product_seller.good_and_product.track_2 == true ||
          good_and_product_seller.good_and_product.buyer_phone_number != '',
      }"
      class="track mx-2"
    ></div>
    <div
      :class="{
        active_track:
          good_and_product_seller.good_and_product.track_3 == true ||
          good_and_product_seller.good_and_product.buyer_transaction_title != '',
      }"
      class="track mx-2"
    ></div>
    <div class="track mx-2"></div>
    <div class="track mx-2"></div>
    <div class="track mx-2"></div>
    <div class="track mx-2"></div>
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