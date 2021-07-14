<template>
  <div class="seller_email product_description">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_back_button == true,
      }"
      color="#4169E2"
      @click="go_back_to_product_price"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product description</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, give a short description of the product you would<br>like to purchase
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
        class="rounded-lg"
        label="Product description"
        color="#4169E2"
        background-color="#fff"
        type="email"
        v-model="
          good_and_product_buyer.good_and_product.product_description_input
        "
        outlined
      ></v-textarea>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_next_button == true,
      }"
      color="#4169E2"
      small
      @click="go_to_product_condition"
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
        @click="go_back_to_product_price"
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
            true,
        }"
        @click="go_to_product_condition"
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
    ...mapActions(["go_back_to_product_price", "go_to_product_condition"]),
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
