<template>
  <v-app class="admin">
    <Dash_nav v-show="route != '/'" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Dash_nav from "../components/dash_nav/Dash_nav.vue";
export default {
  data: () => ({
    route: "",
  }),
  components: {
    Dash_nav,
  },
  created() {
    this.nav();
  },
  updated() {
    this.nav();
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
  background: #EFF1FF
}
</style>