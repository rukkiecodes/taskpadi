<template>
  <v-list-item
    :class="{ 'white rounded-lg': dash_nav.active_dash_route == '/admin/menu' }"
    class="mt-3"
    @click="goto_menu"
    link
  >
    <v-list-item-icon>
      <v-icon
        :class="{
          'blue--text text--accent-4':
            dash_nav.active_dash_route == '/admin/menu',
        }"
        >mdi-view-dashboard-outline</v-icon
      >
    </v-list-item-icon>

    <v-list-item-title
      :class="{
        'blue--text text--accent-4':
          dash_nav.active_dash_route == '/admin/menu',
      }"
      >Menu</v-list-item-title
    >
  </v-list-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goto_menu() {
      this.$router.push("/admin/menu");
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
