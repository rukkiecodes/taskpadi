<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          proof_of_payment.proof.activeate_back_button == true,
      }"
      @click="go_back_to_pt_duration"
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
        <v-icon size="50" class="white--text">mdi-cellphone-screenshot</v-icon>
      </div>
      <v-file-input
        class="mt-10 rounded-lg mb-8"
        style="width: 100%"
        show-size
        multiple
        counter
        prepend-icon="mdi-cellphone-screenshot"
        @change="set_wallet_screenshots"
        label="Upload screenshots"
        background-color="#fff"
        solo
        flat
      ></v-file-input>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          proof_of_payment.proof.activeate_next_button == true,
      }"
      @click="goto_proof_when_to_pay"
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
        @click="go_back_to_pt_duration"
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
        @click="goto_proof_when_to_pay"
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
    ...mapActions(["go_back_to_pt_duration", "goto_proof_when_to_pay"]),
    set_wallet_screenshots(e) {
      console.log(e);
    },
  },
  computed: {
    ...mapState(["proof_of_payment"]),
  },
};
</script>
