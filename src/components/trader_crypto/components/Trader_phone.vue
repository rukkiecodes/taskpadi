<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          trader_crypto.trader.activeate_back_button == true,
      }"
      @click="go_back_to_traders_email"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Trader Phone</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-phone</v-icon>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Phone number"
        background-color="#fff"
        v-model="trader_crypto.trader.phone_input"
        @keypress.enter="goto_trader_currency"
        solo
        flat
      ></v-text-field>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          trader_crypto.trader.activeate_next_button == true,
      }"
      @click="goto_trader_currency"
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
            trader_crypto.trader.activeate_back_button == true,
        }"
        @click="go_back_to_traders_email"
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
            trader_crypto.trader.activeate_next_button == true,
        }"
        @click="goto_trader_currency"
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
    this.trader_crypto.trader.activeate_next_button = true;
    this.trader_crypto.trader.activeate_back_button = true;
    this.trader_crypto.trader.track_1 = true;
    this.trader_crypto.trader.track_2 = true;
  },
  methods: {
    ...mapActions(["go_back_to_traders_email", "goto_trader_currency"]),
  },
  computed: {
    ...mapState(["trader_crypto"]),
  },
};
</script>
