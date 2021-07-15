<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_back_button == true,
      }"
      @click="go_back_to_pt_duration"
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
        <p class="text-h6 grey--text text--darken-4">Agreed amount</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, let your clients now the amount placed on the product
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
        outlined
        color="#4169E2"
        style="width: 100%"
        label="Agreed amount"
        background-color="#fff"
        class="mt-10 rounded-lg"
        @keypress.enter="goto_provider_when_to_pay"
        v-model="provider_services.provider.amount_input"
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_next_button == true,
      }"
      @click="goto_provider_when_to_pay"
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
            provider_services.provider.activeate_back_button == true,
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
            provider_services.provider.activeate_next_button == true,
        }"
        @click="goto_provider_when_to_pay"
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
    this.provider_services.provider.activeate_next_button = true;
    this.provider_services.provider.activeate_back_button = true;
    this.provider_services.provider.track_1 = true;
    this.provider_services.provider.track_2 = true;
    this.provider_services.provider.track_3 = true;
    this.provider_services.provider.track_4 = true;
    this.provider_services.provider.track_5 = true;
  },
  methods: {
    ...mapActions(["go_back_to_pt_duration", "goto_provider_when_to_pay"]),
  },
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>
