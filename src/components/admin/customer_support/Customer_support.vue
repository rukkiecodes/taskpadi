<template>
  <v-container>
    <Table />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
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
