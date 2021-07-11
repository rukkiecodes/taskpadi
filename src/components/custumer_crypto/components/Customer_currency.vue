<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_back_button == true,
      }"
      @click="go_back_to_phone"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Traders Currency</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-currency-btc</v-icon>
      </div>
      <v-select
        :items="custumers_crypto.custumer.currency"
        :label="custumers_crypto.custumer.currency[0]"
        @change="set_currency_input"
        color="#4169E2"
        append-icon="mdi-chevron-down"
        style="width: 100%"
        class="mt-10 rounded-lg"
        solo
        flat
        dense
      ></v-select>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_next_button == true,
      }"
      @click="goto_custumer_amount"
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
        @click="go_back_to_phone"
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
        @click="goto_custumer_amount"
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
  },
  methods: {
    ...mapActions(["go_back_to_phone", "goto_custumer_amount"]),
    set_currency_input(e) {
      this.custumers_crypto.custumer.currency_input = e
    }
  },
  computed: {
    ...mapState(["custumers_crypto"]),
  },
};
</script>
