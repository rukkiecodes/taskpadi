<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          proof_of_payment.proof.activeate_back_button == true,
      }"
      :disabled="proof_of_payment.proof.activeate_back_button != true"
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
        <p class="text-h6 grey--text text--darken-4">Upload screenshot</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, provide a screenshot of wallet transaction
        </p>
      </div>
      <div class="icon my-5">
        <v-avatar size="100" tile>
          <v-img
            lazy-src="../../../assets/trust/interactive_form_icons/screenshot.png"
            src="../../../assets/trust/interactive_form_icons/screenshot.png"
          ></v-img>
        </v-avatar>
      </div>
      <v-file-input
        counter
        outlined
        multiple
        show-size
        style="width: 100%"
        background-color="#fff"
        label="Upload screenshots"
        class="mt-5 rounded-lg mb-5"
        @change="set_wallet_screenshots"
      ></v-file-input>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          proof_of_payment.proof.activeate_next_button == true,
      }"
      :disabled="proof_of_payment.proof.activeate_next_button != true"
      @click="goto_other_proof"
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
            proof_of_payment.proof.activeate_back_button == true,
        }"
        :disabled="proof_of_payment.proof.activeate_back_button != true"
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
            proof_of_payment.proof.activeate_next_button == true,
        }"
        :disabled="proof_of_payment.proof.activeate_next_button != true"
        @click="goto_other_proof"
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
    this.proof_of_payment.proof.activeate_next_button = true;
    this.proof_of_payment.proof.activeate_back_button = false;
    this.proof_of_payment.proof.track_1 = true;
  },
  methods: {
    ...mapActions(["go_back_to_pt_duration", "goto_other_proof"]),
    set_wallet_screenshots(e) {
      this.proof_of_payment.proof.wallet_screenshots.push(e);
    },
  },
  computed: {
    ...mapState(["proof_of_payment"]),
  },
};
</script>
