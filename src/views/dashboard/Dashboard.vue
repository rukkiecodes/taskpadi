<template>
  <v-app class="dashboardColor">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import Nav from "../../components/dashboard/navigation/Nav.vue"
import { mapActions } from "vuex"
export default {
  name: "Dashboard",
  components: {
    Nav,
  },

  mounted() {
    this.$nextTick(() => {
      this.getProfile()
    })
  },

  methods: {
    ...mapActions(["getProfile"])
  }
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
  background: #F8F8FB !important
}
</style>
