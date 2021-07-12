<template>
  <div class="seller_email">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_back_button == true,
      }"
      @click="go_back_available_services"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Transaction Duration</p>
        <p class="text-caption mt-n3">
          Please let your clients know how much time they hve till this deal
          closes
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-currency-btc</v-icon>
      </div>
      <Time_picker style="width: 100%" class="mb-8" />
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      :class="{
        interactive_form_sides_button_active:
          provider_services.provider.activeate_next_button == true,
      }"
      @click="goto_provider_amount"
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
        @click="go_back_available_services"
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
        @click="goto_provider_amount"
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
    this.provider_services.provider.activeate_next_button = true;
    this.provider_services.provider.activeate_back_button = true;
    this.provider_services.provider.track_1 = true;
    this.provider_services.provider.track_2 = true;
    this.provider_services.provider.track_3 = true;
    this.provider_services.provider.track_4 = true;
  },
  methods: {
    ...mapActions(["go_back_available_services", "goto_provider_amount"]),
    set_duration_with_picker(e) {
      this.provider_services.provider.duration_input = e;
      this.provider_services.provider.time_visibility = false;
    },
  },
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>
