<template>
  <v-app class="admin">
    <Dash_nav v-show="route != '/'" />
    <router-view />
  </v-app>
</template>

<script>
import Dash_nav from "../../components/dash_nav/Dash_nav.vue";
export default {
  data: () => ({
    route: "",
  }),
  components: {
    Dash_nav,
  },
  mounted() {
    this.nav();
  },
  methods: {
    nav() {
      this.route = window.location.pathname;
    },
  },
};
</script>

<style scoped>
.admin {
  background: #eff1ff;
}
</style>
