<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_back_button == true,
      }"
      @click="go_back_to_product_condition"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Handle delivery</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Who should handle the delivery of you purchased product
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/delivery.png"
            src="../../../assets/trust/interactive_form_icons/delivery.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-select
        style="width: 100%"
        class="rounded-lg"
        :items="handle_delivery"
        :label="handle_delivery[0]"
        append-icon="mdi-chevron-down"
        color="#4468E2"
        @change="set_handle_delivery_input"
        outlined
      ></v-select>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_next_button ==
            true ||
          good_and_product_buyer.good_and_product.handle_delivery_input != '',
      }"
      color="#4169E2"
      @click="proceed_to_delivery_info"
      small
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
          interactive_form_sides_button_active:
            good_and_product_buyer.good_and_product.activate_back_button ==
            true,
        }"
        @click="go_back_to_product_condition"
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
          interactive_form_sides_button_active:
            good_and_product_buyer.good_and_product.activate_next_button ==
              true ||
            good_and_product_buyer.good_and_product.handle_delivery_input != '',
        }"
        @click="proceed_to_delivery_info"
        small
        depressed
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    handle_delivery: ["TrustPaddi", "The Seller"],
  }),
  mounted() {
    this.good_and_product_buyer.good_and_product.activate_next_button = true;
    this.good_and_product_buyer.good_and_product.activate_back_button = true;
    this.good_and_product_buyer.good_and_product.track_1 = true;
    this.good_and_product_buyer.good_and_product.track_2 = true;
    this.good_and_product_buyer.good_and_product.track_3 = true;
    this.good_and_product_buyer.good_and_product.track_4 = true;
    this.good_and_product_buyer.good_and_product.track_5 = true;
    this.good_and_product_buyer.good_and_product.track_6 = true;
    this.good_and_product_buyer.good_and_product.track_7 = true;
  },
  methods: {
    ...mapActions(["go_back_to_product_condition", "proceed_to_delivery_info"]),
    set_handle_delivery_input(e) {
      this.good_and_product_buyer.good_and_product.handle_delivery_input = e;
    },
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
