<template>
  <v-container class="interactive_form">
    <div class="tracks">
      <div class="track active_track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
      <div class="track mx-2"></div>
    </div>

    <div class="interactive_form_sides">
      <v-btn
        depressed
        class="rounded-lg interactive_form_sides_button"
        color="#4169E2"
        small
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <What_are_you_selling />
      <v-btn
        depressed
        class="
          rounded-lg
          interactive_form_sides_button interactive_form_sides_button_active
        "
        color="#4169E2"
        small
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="interactive_form_mobile_buttons mt-5">
      <v-btn
        depressed
        class="
          interactive_form_mobile_buttons_button
          mx-2
          rounded-lg
          white--text
        "
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        class="
          interactive_form_mobile_buttons_button
          interactive_form_mobile_buttons_button_active
          mx-2
          white--text
          rounded-lg
        "
        depressed
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import What_are_you_selling from "./components/What_are_you_selling.vue";
export default {
  data: () => ({
    items: ["Accessories", "Bar", "Fizz", "Buzz"],
  }),
  components: {
    What_are_you_selling,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/interactive_form.css);
</style>
