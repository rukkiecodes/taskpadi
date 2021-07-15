<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_mobile_buttons_button_active:
          provider_services.provider.activeate_back_button == true,
      }"
      :disabled="provider_services.provider.activeate_back_button == false"
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
        <p class="text-h6 grey--text text--darken-4">Providers Email</p>
        <p class="text-caption mt-n3 grey--text text--darken-4 text-center">
          Please, providers your email address
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
        outlined
        color="#4169E2"
        style="width: 100%"
        label="Providers Email"
        background-color="#fff"
        class="mt-5 rounded-lg"
        @keypress.enter="goto_provider_phone"
        v-model="provider_services.provider.email_input"
      ></v-text-field>
    </v-card>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_next_button == true,
      }"
      @click="goto_provider_phone"
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
        @click="goto_provider_phone"
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
    this.provider_services.provider.activeate_back_button = false;
    this.provider_services.provider.track_1 = true;
  },
  methods: {
    ...mapActions(["goto_provider_phone"]),
  },
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>
