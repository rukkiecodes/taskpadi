<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_back_button == true,
      }"
      @click="go_back_to_cust_price"
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
        <p class="text-h6 grey--text text--darken-4">Transaction Duration</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          How long will this transaction last?
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
      <v-row class="mt-5">
        <v-col class="col-8">
          <v-select
            :items="custumers_crypto.custumer.items"
            label="Duration"
            :value="custumers_crypto.custumer.items[1]"
            @change="set_duration_with_select"
            class="rounded-lg"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col class="col-4">
          <Time_picker />
        </v-col>
      </v-row>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          custumers_crypto.custumer.activeate_next_button == true,
      }"
      @click="go_back_to_wallet_address"
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
        @click="go_back_to_cust_price"
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
        @click="go_back_to_wallet_address"
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
import Time_picker from "./Time_picker.vue";
export default {
  components: {
    Time_picker,
  },
  mounted() {
    this.custumers_crypto.custumer.activeate_next_button = true;
    this.custumers_crypto.custumer.activeate_back_button = true;
    this.custumers_crypto.custumer.track_1 = true;
    this.custumers_crypto.custumer.track_2 = true;
    this.custumers_crypto.custumer.track_3 = true;
    this.custumers_crypto.custumer.track_4 = true;
    this.custumers_crypto.custumer.track_5 = true;
    this.custumers_crypto.custumer.track_6 = true;
  },
  methods: {
    ...mapActions(["go_back_to_cust_price", "go_back_to_wallet_address"]),
    set_duration_with_select(e) {
      this.custumers_crypto.custumer.duration_input = e;
    },
    set_duration_with_picker(e) {
      this.custumers_crypto.custumer.duration_input = e;
      this.custumers_crypto.custumer.time_visibility = false;
    },
  },
  computed: {
    ...mapState(["custumers_crypto"]),
  },
};
</script>
