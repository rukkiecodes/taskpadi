<template>
  <v-list-item
    :class="{
      'white rounded-lg': dash_nav.active_dash_route == '/admin/withdraws',
    }"
    @click="goto_withdraws"
    link
  >
    <v-list-item-icon>
      <v-icon
        :class="{
          'blue--text text--accent-4':
            dash_nav.active_dash_route == '/admin/withdraws',
        }"
        >mdi-cash-register</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title
      :class="{
        'blue--text text--accent-4':
          dash_nav.active_dash_route == '/admin/withdraws',
      }"
      >Withdrawals</v-list-item-title
    >
  </v-list-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goto_withdraws() {
      if (location.pathname != "/admin/withdraws") {
        this.$router.push("/admin/withdraws");
      }
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

<style></style>
