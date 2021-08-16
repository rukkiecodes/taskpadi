<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_back_button == true,
      }"
      :disabled="
        good_and_product_buyer.good_and_product.activate_back_button != true
      "
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card width="350" class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Email address</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter your email address so bealers can contact you
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/email.png"
            src="../../../assets/trust/interactive_form_icons/email.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="rounded-lg"
        label="Email address"
        color="#4169E2"
        background-color="#fff"
        type="email"
        :autofocus="true"
        v-model="good_and_product_buyer.good_and_product.seller_email_input"
        @keypress.enter="goto_sellers_phone_number"
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
      @click="goto_sellers_phone_number"
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
        small
        depressed
        @click="goto_sellers_phone_number"
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
    this.app_bar_route();
    this.good_and_product_buyer.good_and_product.activate_back_button = false;
    this.good_and_product_buyer.good_and_product.activate_next_button = true;
    this.good_and_product_buyer.good_and_product.track_1 = true;
  },
  methods: {
    ...mapActions(["goto_sellers_phone_number", "app_bar_route"]),
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
