<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_back_button == true,
      }"
      color="#4169E2"
      small
      @click="go_back_to_product_name"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product price</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          How much would you like to pay to purchase this product
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/price.png"
            src="../../../assets/trust/interactive_form_icons/price.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="rounded-lg"
        label="Product price"
        color="#4169E2"
        background-color="#fff"
        type="email"
        v-model="good_and_product_buyer.good_and_product.product_price_input"
        @keypress.enter="go_to_product_description"
        :autofocus="true"
        outlined
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_next_button == true,
      }"
      @click="go_to_product_description"
      color="#4169E2"
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
        small
        @click="go_back_to_product_name"
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
            true,
        }"
        @click="go_to_product_description"
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
  mounted() {
    this.good_and_product_buyer.good_and_product.activate_next_button = true;
    this.good_and_product_buyer.good_and_product.activate_back_button = true;
    this.good_and_product_buyer.good_and_product.track_1 = true;
  },
  methods: {
    ...mapActions(["go_back_to_product_name", "go_to_product_description"]),
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
