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
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Product Price</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-cash-register</v-icon>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Product price"
        background-color="#fff"
        v-model="good_and_product_buyer.good_and_product.product_price_input"
        @keypress.enter="go_to_product_description"
        solo
        flat
      ></v-text-field>
    </div>
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
            good_and_product_buyer.good_and_product.activate_back_button == true,
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
            good_and_product_buyer.good_and_product.activate_next_button == true,
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
  created() {
    this.activate_back_button();
    this.activate_next_button();
  },
  mounted() {
    this.activate_back_button();
    this.activate_next_button();
    this.activate_track_1();
    this.activate_track_2();
    this.activate_track_3();
  },
  methods: {
    ...mapActions([
      "go_back_to_product_name",
      "activate_back_button",
      "activate_next_button",
      "go_to_product_description",
      "activate_track_1",
      "activate_track_2",
      "activate_track_3",
    ]),
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
