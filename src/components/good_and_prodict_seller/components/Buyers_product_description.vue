<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_seller.good_and_product.activate_back_button == true,
      }"
      @click="go_back_to_gaps_transaction_title"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      width="350"
      class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5"
    >
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product description</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, write a short description of this product
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/description.png"
            src="../../../assets/trust/interactive_form_icons/description.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-textarea
        style="width: 100%"
        class="mt-5 rounded-lg"
        label="Product description"
        background-color="#fff"
        height="100"
        v-model="
          good_and_product_seller.good_and_product.buyer_product_description
        "
        @keypress.enter="go_to_gaps_agreed_price"
        outlined
      ></v-textarea>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_seller.good_and_product.activate_next_button == true,
      }"
      @click="go_to_gaps_agreed_price"
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
          interactive_form_mobile_buttons_button_active:
            good_and_product_seller.good_and_product.activate_back_button ==
            true,
        }"
        @click="go_back_to_gaps_transaction_title"
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
        @click="go_to_gaps_agreed_price"
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
    this.good_and_product_seller.good_and_product.track_1 = true;
    this.good_and_product_seller.good_and_product.activate_next_button = true;
    this.good_and_product_seller.good_and_product.activate_back_button = true;
  },
  methods: {
    ...mapActions([
      "go_back_to_gaps_transaction_title",
      "go_to_gaps_agreed_price",
    ]),
  },
  computed: {
    ...mapState(["good_and_product_seller"]),
  },
};
</script>
