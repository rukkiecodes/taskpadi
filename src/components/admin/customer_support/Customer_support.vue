<template>
  <v-container>
    <Safe_area />
    <v-row class="mb-16" justify="space-between" align="start">
      <v-col cols="12" sm="8">
        <Inputs />
      </v-col>
    </v-row>
    <Table />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Safe_area: () => import("../../app_components/Safe_area.vue"),
    Inputs: () => import("./components/Inputs.vue"),
    Table: () => import("./components/Table.vue"),
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },

  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      // @ts-ignore
      console.log("customer support route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      // @ts-ignore
      this.dash_nav.active_dash_route = "/admin/customer_support";
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
