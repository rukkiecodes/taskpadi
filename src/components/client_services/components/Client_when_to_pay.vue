<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_back_button == true,
      }"
      @click="go_back_to_client_amount"
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
        <p class="text-h6 grey--text text--darken-4">When to pay</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          When would you like clients to pay for goods? Please select a time and
          date
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/wallet_2.png"
            src="../../../assets/trust/interactive_form_icons/wallet_2.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-select
        outlined
        color="#4169E2"
        style="width: 100%"
        class="mt-5 rounded-lg"
        @change="set_when_to_pay_input"
        :items="client_services.client.when_to_pay_options"
        label="When to pay"
      ></v-select>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          client_services.client.activeate_next_button == true,
      }"
      @click="goto_client_terms_of_contract"
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
        @click="go_back_to_client_amount"
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
        @click="goto_client_terms_of_contract"
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
    this.client_services.client.track_6 = true;
  },
  methods: {
    ...mapActions([
      "go_back_to_client_amount",
      "goto_client_terms_of_contract",
    ]),
    set_when_to_pay_input(e) {
      this.client_services.client.when_to_pay_input = e;
    },
  },
  computed: {
    ...mapState(["client_services"]),
  },
};
</script>
