<template>
  <v-container>
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <Ballance />
      </v-col>
      <v-col cols="12">
        <Inputs />
      </v-col>
      <v-col cols="12">
        <History />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Inputs: () => import("./components/Inputs.vue"),
    Ballance: () => import("./components/Ballance.vue"),
    History: () => import("./components/History.vue"),
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("menu route: ", this.dash_nav.active_dash_route);
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
