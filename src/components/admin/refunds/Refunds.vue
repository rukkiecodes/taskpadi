<template>
  <v-container>
    <Safe_area />
    <Table />
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Safe_area: () => import("../../app_components/Safe_area.vue"),
    Table: () => import("./components/Table.vue")
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/refunds";
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
