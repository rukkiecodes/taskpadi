<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_back_button == true,
      }"
      @click="goback_to_handle_delivery"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card width="350" class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product name</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter the name of the product you would like<br />
          to purchase
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/name.png"
            src="../../../assets/trust/interactive_form_icons/name.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="rounded-lg"
        label="Product name"
        color="#4169E2"
        background-color="#fff"
        type="email"
        v-model="delivery_info.delivery.product_name_input"
        @keypress.enter="go_to_product_size"
        :autofocus="true"
        outlined
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_next_button == true,
      }"
      @click="go_to_product_size"
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
            delivery_info.delivery.activate_back_button == true,
        }"
        @click="goback_to_handle_delivery"
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
            delivery_info.delivery.activate_next_button == true,
        }"
        @click="go_to_product_size"
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
    this.delivery_info.delivery.track_1 = true;
    this.delivery_info.delivery.track_2 = false;
    this.delivery_info.delivery.activate_next_button = true;
    this.delivery_info.delivery.activate_back_button = true;
  },
  methods: {
    ...mapActions(["go_to_product_size", "goback_to_handle_delivery"]),
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
