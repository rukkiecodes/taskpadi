<template>
  <div class="tracks">
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_1 == true ||
          good_and_product_buyer.good_and_product.seller_email_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_2 == true ||
          good_and_product_buyer.good_and_product.seller_phone_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_3 == true ||
          good_and_product_buyer.good_and_product.product_name_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_4 == true ||
          good_and_product_buyer.good_and_product.product_price_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_5 == true ||
          good_and_product_buyer.good_and_product.product_description_input !=
            '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_6 == true ||
          good_and_product_buyer.good_and_product.product_condition_input != '',
      }"
    ></div>
    <div
      class="track mx-2"
      :class="{
        active_track:
          good_and_product_buyer.good_and_product.track_7 == true ||
          good_and_product_buyer.good_and_product.handle_delivery_input != '',
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