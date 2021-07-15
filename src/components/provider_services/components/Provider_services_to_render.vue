<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_back_button == true,
      }"
      @click="go_back_to_provider_phone"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-card
      width="350"
      class="interactive_form_sides_card rounded-xl mx-4 mt-5 pt-5 px-5"
    >
      <div class="texts">
        <p class="text-h6 grey--text text--darken-4">Available services</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          What kind of services do you offer
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/customer.png"
            src="../../../assets/trust/interactive_form_icons/customer.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-textarea
        outlined
        color="#4169E2"
        height="100"
        style="width: 100%"
        background-color="#fff"
        class="mt-5 rounded-lg"
        label="Available services"
        v-model="provider_services.provider.provider_services_input"
      ></v-textarea>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_next_button == true,
      }"
      @click="goto_service_duration"
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
            provider_services.provider.activeate_back_button == true,
        }"
        @click="go_back_to_provider_phone"
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
            provider_services.provider.activeate_next_button == true,
        }"
        @click="goto_service_duration"
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
    this.provider_services.provider.activeate_next_button = true;
    this.provider_services.provider.activeate_back_button = true;
    this.provider_services.provider.track_1 = true;
    this.provider_services.provider.track_2 = true;
    this.provider_services.provider.track_3 = true;
  },
  methods: {
    ...mapActions(["go_back_to_provider_phone", "goto_service_duration"]),
  },
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>
