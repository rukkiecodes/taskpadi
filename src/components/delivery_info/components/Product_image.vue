<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      small
      :class="{
        interactive_form_sides_button_active:
          delivery_info.delivery.activate_back_button == true,
      }"
      @click="go_back_to_di_product_size"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card width="350" class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5">
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Product image</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter an image of the product
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/gallery.png"
            src="../../../assets/trust/interactive_form_icons/gallery.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-file-input
        show-size
        counter
        multiple
        outlined
        dense
        prepend-icon="mdi-image-multiple"
        style="width: 100%"
        class="mt-15 mb-5 rounded-lg"
        label="Select product image"
        @change="emage_event"
      ></v-file-input>
    </v-card>
    <v-btn
      depressed
      class="
        rounded-lg
        interactive_form_sides_button interactive_form_sides_button_active
      "
      color="#4169E2"
      small
      @click="go_to_residential_address"
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
        @click="go_back_to_di_product_size"
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
        @click="go_to_residential_address"
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
    this.delivery_info.delivery.activate_back_button = true;
    this.delivery_info.delivery.track_1 = true;
  },
  methods: {
    emage_event(e) {
      this.delivery_info.delivery.product_image.push(e);
    },

    ...mapActions(["go_to_residential_address", "go_back_to_di_product_size"]),
  },
  computed: {
    ...mapState(["delivery_info"]),
  },
};
</script>
