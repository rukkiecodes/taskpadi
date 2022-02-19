<template>
  <v-app class="dashboardColor">
    <Nav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import { mapActions } from "vuex"
import Nav from "../../components/dashboard/navigation/Nav.vue"
export default {
  name: "Dashboard",
  components: {
    Nav,
  },

  mounted() {
    this.$nextTick(() => {
      this.getStates()
      this.getProfile()
      this.getTransactions()
    })
  },

  methods: {
    ...mapActions(["getProfile", "getTransactions", "getStates"]),
  },
}
</script>

<style>
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
