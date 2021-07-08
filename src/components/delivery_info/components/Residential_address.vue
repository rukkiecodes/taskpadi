<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      small
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_back_button == true
      }"
      @click="go_back_to_di_product_image"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Residential address</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-google-maps</v-icon>
      </div>
      <v-textarea
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Residential address"
        background-color="#fff"
        v-model="delivery_info.delivery.delivery_address"
        solo
        flat
      ></v-textarea>
    </div>
    <v-btn
      depressed
      class="
        rounded-lg
        interactive_form_sides_button interactive_form_sides_button_active
      "
      color="#4169E2"
      small
      @click="go_to_state_residence"
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
            delivery_info.delivery.activate_back_button == true
        }"
        @click="go_back_to_di_product_image"
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
        @click="go_to_state_residence"
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
    this.delivery_info.delivery.activate_back_button = true
    this.delivery_info.delivery.track_1 = true
    this.delivery_info.delivery.track_2 = true
    this.delivery_info.delivery.track_3 = true
    this.delivery_info.delivery.track_4 = true
  },
  methods: {
    ...mapActions(["go_to_state_residence", "go_back_to_di_product_image"])
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
