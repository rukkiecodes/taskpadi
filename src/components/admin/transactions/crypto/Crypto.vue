<template>
  <v-container>
    <Safe_area />
    <Stats />
    <Create_transaction_dialog />
    <Table />
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Safe_area: () => import("../../../app_components/Safe_area.vue"),
    Create_transaction_dialog: () => import("./Create_transaction_dialog.vue"),
    Stats: () => import("./Stats.vue"),
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
      console.log("crypto route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/crypto";
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
