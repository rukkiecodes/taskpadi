<template>
  <div class="seller_email product_name">
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button"
      color="#4169E2"
      small
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="interactive_form_sides_card green accent-1 rounded-xl mx-4 pa-5 pb-0">
      <div class="texts">
        <p class="text-h6">Product name</p>
        <p class="text-caption mt-n3">
          Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.
        </p>
      </div>
      <div class="icon mt-5">
        <v-icon size="50" class="white--text">mdi-shopping-outline</v-icon>
      </div>
      <v-text-field
        style="width: 100%"
        class="mt-10 rounded-lg"
        label="Product name"
        background-color="#fff"
        solo
        flat
      ></v-text-field>
    </div>
    <v-btn
      depressed
      class="rounded-lg interactive_form_sides_button interactive_form_sides_button_active"
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
        small
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
        small
        depressed
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
