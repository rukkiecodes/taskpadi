<template>
  <v-list-item
    :class="{
      'white rounded-lg': dash_nav.active_dash_route == '/admin/refunds',
    }"
    @click="goto_refunds"
    link
  >
    <v-list-item-icon>
      <v-icon
        class="white--text"
        :class="{
          'blue--text text--accent-4t':
            dash_nav.active_dash_route == '/admin/refunds',
        }"
        >mdi-cash-refund</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title
      class="white--text"
      :class="{
        'blue--text text--accent-4':
          dash_nav.active_dash_route == '/admin/refunds',
      }"
      >Refunds</v-list-item-title
    >
  </v-list-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goto_refunds() {
      if (location.pathname != "/admin/refunds") {
        this.$router.push("/admin/refunds");
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
