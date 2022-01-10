<template>
  <v-app class="dashboardColor">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </v-app>
</template>

<script>
import Nav from "../../components/admin/navigation/Nav.vue"
import Footer from "../../components/admin/components/Footer.vue"
export default {
  name: "Dashboard",
  components: {
    Nav,
    Footer,
  },
}
</script>

<style>
@import url(../../assets/icon/css/materialdesignicons.min.css);
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

.dashboardColor {
  background: #f8f8fb !important;
}
</style>
