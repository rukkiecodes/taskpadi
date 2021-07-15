<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          trader_crypto.trader.activeate_back_button == true,
      }"
      @click="go_back_to_amount"
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
        <p class="text-h6 grey--text text--darken-4">Price</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          What was the price placed on this transaction?
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/price.png"
            src="../../../assets/trust/interactive_form_icons/price.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Traders price"
        background-color="#fff"
        v-model="trader_crypto.trader.price_input"
        @keypress.enter="goto_trader_duration"
        outlined
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          trader_crypto.trader.activeate_next_button == true,
      }"
      @click="goto_trader_duration"
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
        @click="go_back_to_amount"
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
        @click="goto_trader_duration"
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
    this.trader_crypto.trader.track_3 = true;
    this.trader_crypto.trader.track_4 = true;
    this.trader_crypto.trader.track_5 = true;
  },
  methods: {
    ...mapActions(["go_back_to_amount", "goto_trader_duration"]),
  },
  computed: {
    ...mapState(["trader_crypto"]),
  },
};
</script>
