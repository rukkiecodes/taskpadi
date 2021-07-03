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
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="interactive_form_sides_card">
          <p>What are you selling?</p>
          <p>Lorem ipsum dolor sit amet consectrur adis ampiscing Lorem dolor.</p>
      </div>
      <v-btn
        depressed
        class="
          rounded-lg
          interactive_form_sides_button interactive_form_sides_button_active
        "
        color="#4169E2"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../assets/styles/interactive_form.css);
</style>
