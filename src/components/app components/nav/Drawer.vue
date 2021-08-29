<template>
  <v-navigation-drawer v-model="nav.drawer" color="deep-purple lighten-5" hide-overlay app>
    <v-list-item>
      <v-card
        class="d-flex flex-column justify-center align-center"
        width="100%"
        height="200"
        flat
        color="transparent"
      >
        <v-avatar tile size="70">
          <img src="../../../assets/paddi.png" />
        </v-avatar>
        <span class="text-h6 mt-4 grey--text text--darken-3">
          TrustPaddi
        </span>
      </v-card>
    </v-list-item>

    <v-list dense>
      <v-list-item
        v-for="(route, i) in appRoutes"
        :key="i"
        :to="route.to"
        active-class="deep-purple accent-4 white--text"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["appRoutes"]),
    ...mapState(["nav"]),
    nav: {
      get() {
        return this.$store.state.nav;
      },
      set(new_value) {
        this.$store.state.nav = new_value;
      },
    },
  },
};
</script>
