<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_back_button == true,
      }"
      :disabled="delivery_info.delivery.activate_back_button != true"
      @click="goback_to_di_residential_address"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      width="350"
      class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5"
    >
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">State of residence</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter an image of the product
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/state_address.png"
            src="../../../assets/trust/interactive_form_icons/state_address.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        outlined
        style="width: 100%"
        background-color="#fff"
        class="mt-10 rounded-lg"
        label="State of residence"
        v-model="delivery_info.delivery.state_of_residence"
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_next_button == true,
      }"
      :disabled="delivery_info.delivery.activate_right_button != true"
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
        :disabled="delivery_info.delivery.activate_back_button != true"
        @click="goback_to_di_residential_address"
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
        :disabled="delivery_info.delivery.activate_next_button != true"
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
    this.delivery_info.delivery.activate_next_button = false;
    this.delivery_info.delivery.activate_back_button = true;
    this.delivery_info.delivery.track_1 = true;
    this.delivery_info.delivery.track_2 = true;
  },
  methods: {
    ...mapActions(["goback_to_di_residential_address"])
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
