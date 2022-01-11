<template>
  <v-app id="paddi_app">
    <Alert />
    <v-main class="white">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Alert from "./components/app components/Aleart.vue"
import Vue from "vue";
export default {
  name: "App",
  components: {
    Alert,
  },

  created() {
    Vue.prototype.$vs = this.$vs;
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url(./assets/icon/css/materialdesignicons.min.css);
@import url(./assets/icon2/css/line-awesome.min.css);

html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
