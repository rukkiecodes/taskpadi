<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_seller.good_and_product.activate_back_button == true,
      }"
      @click="go_back_to_gaps_product_condition"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Buyers product image</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-image-outline</v-icon>
      </div>
      <v-file-input
        show-size
        counter
        multiple
        solo
        dense
        flat
        prepend-icon="mdi-image-multiple"
        style="width: 100%"
        class="mt-15 mb-5 rounded-lg"
        label="Select product image"
      ></v-file-input>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_seller.good_and_product.activate_next_button == true,
      }"
      color="#4169E2"
      small
      disabled
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>

    <div class="interactive_form_mobile_buttons mt-5">
      <v-btn
        depressed
        class="
          interactive_form_mobile_buttons_button
          mx-2
          rounded-lg
          white--text
        "
        :class="{
          interactive_form_mobile_buttons_button_active:
            good_and_product_seller.good_and_product.activate_back_button ==
            true,
        }"
        @click="go_back_to_gaps_product_condition"
        small
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        class="
          interactive_form_mobile_buttons_button
          mx-2
          white--text
          rounded-lg
        "
        :class="{
          interactive_form_mobile_buttons_button_active:
            good_and_product_seller.good_and_product.activate_next_button ==
            true,
        }"
        small
        depressed
        disabled
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.good_and_product_seller.good_and_product.track_1 = true;
    this.good_and_product_seller.good_and_product.track_2 = true;
    this.good_and_product_seller.good_and_product.track_3 = true;
    this.good_and_product_seller.good_and_product.track_4 = true;
    this.good_and_product_seller.good_and_product.track_5 = true;
    this.good_and_product_seller.good_and_product.track_6 = true;
    this.good_and_product_seller.good_and_product.track_7 = true;
    this.good_and_product_seller.good_and_product.track_8 = true;
    this.good_and_product_seller.good_and_product.activate_next_button = false;
    this.good_and_product_seller.good_and_product.activate_back_button = true;
  },
  methods: {
    ...mapActions(["go_back_to_gaps_product_condition"])
  },
  computed: {
    ...mapState(["good_and_product_seller"]),
  },
};
</script>
