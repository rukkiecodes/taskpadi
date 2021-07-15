<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_back_button != false,
      }"
      color="#4169E2"
      @click="go_back_to_di_product_name"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product size</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter the size of the product, and its mesurment<br />unit
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
      <div class="d-flex align-center">
        <p class="text-h6 mr-2">Size</p>
        <p class="text-body-2">
          {{ delivery_info.delivery.product_size }}:
          {{ delivery_info.delivery.mesurment_unit }}
        </p>
      </div>
      <v-card-actions class="d-flex flex-row justify-space-between align-center" style="width: 100%">
        <v-slider
          style="width: 80%"
          class="rounded-lg"
          v-model="delivery_info.delivery.product_size"
          min="0"
          max="100"
          thumb-label
          color="#4468E2"
          dense
        ></v-slider>
        <v-text-field
          style="width: 20%"
          background-color="#fff"
          v-model="delivery_info.delivery.mesurment_unit"
          class="text-center"
          placeholder="M/U"
          dense
          outlined
        ></v-text-field>
      </v-card-actions>
    </v-card>
    <v-btn
      depressed
      class="
        rounded-lg
        interactive_form_sides_button interactive_form_sides_button_active
      "
      color="#4169E2"
      @click="go_to_product_image"
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
            delivery_info.delivery.product_size != '',
        }"
        @click="go_back_to_di_product_name"
        small
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        class="
          interactive_form_mobile_buttons_button
          interactive_form_mobile_buttons_button_active
          mx-2
          white--text
          rounded-lg
        "
        small
        depressed
        @click="go_to_product_image"
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
    this.delivery_info.delivery.activate_back_button = true;
    this.delivery_info.delivery.track_1 = true;
    this.delivery_info.delivery.track_2 = false;
  },
  methods: {
    ...mapActions(["go_to_product_image", "go_back_to_di_product_name"]),
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
