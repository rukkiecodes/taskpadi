<template>
  <div class="seller_email product_name">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div
      class="
        interactive_form_sides_card
        green
        accent-1
        rounded-xl
        mx-4
        pa-5
        pb-0
      "
    >
      <div class="texts">
        <p class="text-h6">Product size</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-shopping-outline</v-icon>
      </div>

      <div class="mt-5">
        <p class="text-h6">Size</p>
        <p class="mt-n3 text-body-2">
          {{ delivery_info.delivery.product_size }}: 
          {{ delivery_info.delivery.mesurment_unit }}
        </p>
      </div>

      <v-slider
        style="width: 100%"
        class="mt-5 rounded-lg"
        v-model="delivery_info.delivery.product_size"
        min="0"
        max="100"
        thumb-label
        color="#4468E2"
        dense
      ></v-slider>
      <v-btn
        @click="delivery_info.delivery.mesurment_unit_visibility = true"
        depressed
        class="white--text text-capitalize mb-5 rounded-lg"
        block
        color="#4468E2"
        >Mesument unit</v-btn
      >
      <v-text-field
        style="width: 100%"
        flat
        background-color="transparent"
        v-model="delivery_info.delivery.mesurment_unit"
        dense
        solo
        placeholder="Mesurment unit"
        v-show="delivery_info.delivery.mesurment_unit_visibility == true"
        @blur="delivery_info.delivery.mesurment_unit_visibility = false"
        @keypress.enter="
          delivery_info.delivery.mesurment_unit_visibility = false
        "
      ></v-text-field>
    </div>
    <v-btn
      depressed
      class="
        rounded-lg
        interactive_form_sides_button interactive_form_sides_button_active
      "
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
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    product_size: 4,
  }),
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
