<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_back_button == true,
      }"
      @click="go_back_to_product_description"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card width="350" class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product condition</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          What is the state of the product you would like to purchase
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/condition.png"
            src="../../../assets/trust/interactive_form_icons/condition.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-select
        style="width: 100%"
        class="rounded-lg"
        :items="product_condition"
        :label="product_condition[0]"
        append-icon="mdi-chevron-down"
        color="#4468E2"
        @change="select_value"
        outlined
      ></v-select>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_next_button == true,
      }"
      @click="go_to_handle_delivery"
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
        @click="go_back_to_product_description"
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
        @click="go_to_handle_delivery"
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
    product_condition: ["Brand New", "Fairly used", "Belgium"],
  }),
  mounted() {
    this.good_and_product_buyer.good_and_product.activate_next_button = true;
    this.good_and_product_buyer.good_and_product.activate_back_button = true;
    this.good_and_product_buyer.good_and_product.track_1 = true;
  },
  methods: {
    ...mapActions(["go_back_to_product_description", "go_to_handle_delivery"]),
    select_value(e) {
      this.good_and_product_buyer.good_and_product.product_condition_input = e;
    },
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
