<template>
  <v-container class="mt-16 mt-md-16 mt-lg-12">
    <v-row class="flex-column-reverse flex-sm-row" justify="space-between" align="center">
      <v-col cols="12" sm="5" lg="4">
        <p class="text-h5 grey--text text--darken-3">
          Hello <span class="indigo--text text--accent-4 font-weight-bold">John Doe</span>,
          welcome to TrustPaddi. Let's get you started with the basics.
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img
          lazy-src="../../../assets/trust/home_phone.png"
          src="../../../assets/trust/home_phone.png"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
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
      this.dash_nav.active_dash_route = "/admin";
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
