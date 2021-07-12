<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_back_button == true,
      }"
      @click="go_back_to_client_phone"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Available services</p>
        <p class="text-caption mt-n3">
          What kind of services do you offer
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-phone</v-icon>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Available services"
        background-color="#fff"
        v-model="client_services.client.client_services_input"
        @keypress.enter="goto_client_service_duration"
        prepend-inner-icon="mdi-room-service"
        color="#4169E2"
        solo
        flat
      ></v-text-field>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_next_button == true,
      }"
      @click="goto_client_service_duration"
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
            client_services.client.activeate_back_button == true,
        }"
        @click="go_back_to_client_phone"
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
            client_services.client.activeate_next_button == true,
        }"
        @click="goto_client_service_duration"
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
    this.client_services.client.activeate_next_button = true;
    this.client_services.client.activeate_back_button = true;
    this.client_services.client.track_1 = true;
    this.client_services.client.track_2 = true;
    this.client_services.client.track_3 = true;
  },
  methods: {
    ...mapActions(["go_back_to_client_phone", "goto_client_service_duration"]),
  },
  computed: {
    ...mapState(["client_services"]),
  },
};
</script>
