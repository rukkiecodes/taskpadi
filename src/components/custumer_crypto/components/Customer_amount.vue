<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_back_button == true,
      }"
      @click="go_back_to_cust_currency"
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
        <p class="text-h6 grey--text text--darken-4">Agreed Amount</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          How much was agreed on this transaction?
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/cash.png"
            src="../../../assets/trust/interactive_form_icons/cash.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-5 rounded-lg"
        label="Agreed amount"
        background-color="#fff"
        v-model="custumers_crypto.custumer.amount_input"
        @keypress.enter="goto_price"
        outlined
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_next_button == true,
      }"
      @click="goto_price"
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
            custumers_crypto.custumer.activeate_back_button == true,
        }"
        @click="go_back_to_cust_currency"
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
            custumers_crypto.custumer.activeate_next_button == true,
        }"
        @click="goto_price"
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
    this.custumers_crypto.custumer.activeate_next_button = true;
    this.custumers_crypto.custumer.activeate_back_button = true;
    this.custumers_crypto.custumer.track_1 = true;
    this.custumers_crypto.custumer.track_2 = true;
    this.custumers_crypto.custumer.track_3 = true;
    this.custumers_crypto.custumer.track_4 = true;
  },
  methods: {
    ...mapActions(["go_back_to_cust_currency", "goto_price"]),
  },
  computed: {
    ...mapState(["custumers_crypto"]),
  },
};
</script>
