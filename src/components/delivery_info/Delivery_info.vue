<template>
  <v-container class="interactive_form">
    <div class="interactive_form_sides">
      <!-- <Tracks /> -->
      <router-view />
    </div>
  </v-container>
</template>

<script>
// import Tracks from "./components/Tracks.vue";
export default {
  components: {
    // Tracks,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/interactive_form.css);
</style>
