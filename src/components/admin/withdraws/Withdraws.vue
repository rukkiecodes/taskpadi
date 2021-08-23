<template>
  <v-container>
    <Safe_area />
    <v-row justify="space-between" align="start">
      <v-col cols="12" md="4">
        <Ballance />
      </v-col>
      <v-col cols="12" md="8">
        <Inputs />
      </v-col>
      <v-col cols="12">
        <History />
      </v-col>
    </v-row>
    <Loading_dialog />
    <Done_dialog />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Safe_area: () => import("../../app_components/Safe_area.vue"),
    Inputs: () => import("./components/Inputs.vue"),
    Ballance: () => import("./components/Ballance.vue"),
    History: () => import("./components/History.vue"),
    Loading_dialog: () => import("./components/Loading_dialog.vue"),
    Done_dialog: () => import("./components/Done_dialog.vue"),
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("withdraws route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/withdraws";
    },
  },

  computed: {
    ...mapState(["dash_nav"]),
    dash_nav: {
      get() {
        return this.$store.state.dash_nav;
      },
      set(new_value) {
        this.$store.state.dash_nav = new_value;
      },
    },
  },
};
</script>
