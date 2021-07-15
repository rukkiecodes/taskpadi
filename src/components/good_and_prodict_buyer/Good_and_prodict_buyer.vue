<template>
  <v-container class="interactive_form">
    <div class="interactive_form_sides">
      <Tracks />
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view class="view" />
      </transition>
    </div>
  </v-container>
</template>

<script>
import Tracks from "./components/Tracks.vue";
export default {
  components: {
    Tracks,
  },
};
</script>

<style scoped>
@import url(../../assets/styles/interactive_form.css);
@import url(../../assets/styles/animate.css);
.view {
  /* background: red; */
  height: 100vh;
  width: 100vw;
}
</style>
