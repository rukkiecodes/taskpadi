<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_back_button == true,
      }"
      :disabled="client_services.client.activeate_back_button != true"
      @click="go_back_to_client_when_to_pay"
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
        <p class="text-h6 grey--text text--darken-4">Terms of contract <small class="text-caption">(Optional)</small></p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          What are the terms and contitions clients should take note off?
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/terms-and-conditions.png"
            src="../../../assets/trust/interactive_form_icons/terms-and-conditions.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-textarea
        outlined
        height="100"
        style="width: 100%"
        background-color="#fff"
        class="mt-10 rounded-lg"
        label="Terms of contract"
        v-model="client_services.client.terms_of_contract_input"
      ></v-textarea>
    </v-card>
    <!-- <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Terms of contract <small class="text-caption">(Optional)</small></p>
        <p class="text-caption mt-n3">
          What are the terms and contitions clients should take note off?
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text"
          >mdi-currency-usd-circle-outline</v-icon
        >
      </div>
      <v-textarea
        style="width: 100%" 
        class="mt-10 rounded-lg"
        label="Terms of contract"
        background-color="#fff"
        v-model="client_services.client.terms_of_contract_input"
        solo
        flat
      ></v-textarea>
    </div> -->
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_next_button == true,
      }"
      :disabled="client_services.client.activeate_next_button != true"
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
        :disabled="client_services.client.activeate_back_button != true"
        @click="go_back_to_client_when_to_pay"
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
        :disabled="client_services.client.activeate_next_button != true"
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
    this.client_services.client.activeate_next_button = false;
    this.client_services.client.activeate_back_button = true;
    this.client_services.client.track_1 = true;
    this.client_services.client.track_2 = true;
    this.client_services.client.track_3 = true;
    this.client_services.client.track_4 = true;
    this.client_services.client.track_5 = true;
    this.client_services.client.track_6 = true;
    this.client_services.client.track_7 = true;
  },
  methods: {
    ...mapActions(["go_back_to_client_when_to_pay"]),
  },
  computed: {
    ...mapState(["client_services"]),
  },
};
</script>
