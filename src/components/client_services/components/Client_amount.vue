<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_back_button == true,
      }"
      @click="go_back_to_client_duration"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Agreed amount</p>
        <p class="text-caption mt-n3">
          Please, let your clients now the amount placed on the product
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text"
          >mdi-currency-usd-circle-outline</v-icon
        >
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Agreed amount"
        background-color="#fff"
        v-model="client_services.client.amount_input"
        @keypress.enter="goto_client_when_to_pay"
        prepend-inner-icon="mdi-currency-usd-circle-outline"
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
      @click="goto_client_when_to_pay"
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
        @click="go_back_to_client_duration"
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
        @click="goto_client_when_to_pay"
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
    this.client_services.client.track_4 = true;
    this.client_services.client.track_5 = true;
  },
  methods: {
    ...mapActions(["go_back_to_client_duration", "goto_client_when_to_pay"]),
  },
  computed: {
    ...mapState(["client_services"]),
  },
};
</script>
