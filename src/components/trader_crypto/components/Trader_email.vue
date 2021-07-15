<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_mobile_buttons_button_active:
          trader_crypto.trader.activeate_back_button == true,
      }"
      :disabled="trader_crypto.trader.activeate_back_button != true"
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
        <p class="text-h6 grey--text text--darken-4">Buyers Email</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, enter your email address for easy contact
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/email.png"
            src="../../../assets/trust/interactive_form_icons/email.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Traders Email"
        background-color="#fff"
        v-model="trader_crypto.trader.email_input"
        @keypress.enter="goto_trader_phone"
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
      :disabled="trader_crypto.trader.activeate_next_button != true"
      @click="goto_trader_phone"
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
        :disabled="trader_crypto.trader.activeate_back_button != true"
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
        :disabled="trader_crypto.trader.activeate_next_button != true"
        @click="goto_trader_phone"
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
    this.trader_crypto.trader.activeate_back_button = false;
    this.trader_crypto.trader.track_1 = true;
  },
  methods: {
    ...mapActions(["goto_trader_phone"]),
  },
  computed: {
    ...mapState(["trader_crypto"]),
  },
};
</script>
