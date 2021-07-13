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
      @click="go_back_to_seller_email"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Phone number</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter your mobile number so bealers can contact you
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="130" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/phone.png"
            src="../../../assets/trust/interactive_form_icons/phone.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="rounded-lg"
        label="Phone number"
        color="#4169E2"
        background-color="#fff"
        type="email"
        v-model="good_and_product_buyer.good_and_product.seller_phone_input"
        @keypress.enter="goto_product_name"
        outlined
      ></v-text-field>
    </v-card>
    <!-- <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Phone number</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-phone</v-icon>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Seller phone number"
        background-color="#fff"
        v-model="good_and_product_buyer.good_and_product.seller_phone_input"
        @keypress.enter="goto_product_name"
        solo
        flat
      ></v-text-field>
    </div> -->
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          good_and_product_buyer.good_and_product.activate_next_button == true,
      }"
      color="#4169E2"
      @click="goto_product_name"
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
        @click="go_back_to_seller_email"
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
        @click="goto_product_name"
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
    this.good_and_product_buyer.good_and_product.track_2 = true;
  },
  methods: {
    ...mapActions([
      "goto_product_name",
      "go_back_to_seller_email",
      "activate_track_1",
    ]),
  },
  computed: {
    ...mapState(["good_and_product_buyer"]),
  },
};
</script>
