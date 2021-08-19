<template>
  <v-list-item
    @click="goto_customer_support"
    :class="{
      'white rounded-lg': dash_nav.active_dash_route == '/admin/customer_support',
    }"
    link
  >
    <v-list-item-icon>
      <v-icon
        class="white--text"
        :class="{
          'indigo--text text--accent-4t':
            dash_nav.active_dash_route == '/admin/customer_support',
        }"
        >mdi-account-tie-voice-outline</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title
      class="white--text"
      :class="{
        'indigo--text text--accent-4':
          dash_nav.active_dash_route == '/admin/customer_support',
      }"
      >Customer Support
    </v-list-item-title>
  </v-list-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goto_customer_support() {
      if (location.pathname != "/admin/customer_support") {
        this.$router.push("/admin/customer_support");
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
