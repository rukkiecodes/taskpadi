<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      :class="{
        interactive_form_sides_button_active:
          this.delivery_info.delivery.activate_back_button == true,
      }"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">State of residence</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-home-map-marker</v-icon>
      </div>
      <v-text-field
        flat
        solo
        style="width: 100%"
        background-color="#fff"
        class="mt-10 rounded-lg"
        label="State of residence"
        v-model="delivery_info.delivery.state_of_residence"
      ></v-text-field>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      :class="{
        interactive_form_sides_button_active:
          this.delivery_info.delivery.activate_next_button == true,
      }"
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
            this.delivery_info.delivery.activate_back_button == true,
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
          interactive_form_mobile_buttons_button_active:
            this.delivery_info.delivery.activate_next_button == true,
        }"
        small
        depressed
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.delivery_info.delivery.activate_back_button = true;
    this.delivery_info.delivery.activate_next_button = false;
    this.delivery_info.delivery.track_1 = true
    this.delivery_info.delivery.track_2 = true
    this.delivery_info.delivery.track_3 = true
    this.delivery_info.delivery.track_4 = true
    this.delivery_info.delivery.track_5 = true
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
