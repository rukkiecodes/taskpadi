<template>
  <v-app-bar app flat color="deep-purple lighten-5">
    <v-app-bar-nav-icon
      @click="
        dashboardNavigation.drawerState = !dashboardNavigation.drawerState
      "
      class="hidden-lg-and-up"
    />

    <v-text-field
      flat
      solo
      dense
      hide-details
      placeholder="Search here"
      append-icon="mdi-magnify"
      color="deep-purple accent-4"
    ></v-text-field>

    <v-spacer />
    <v-btn
      icon
      plain
      @click="
        dashboardNavigation.rightDrawerState = !dashboardNavigation.rightDrawerState
      "
      color="grey darken-4"
      class="hidden-lg-and-up"
    >
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["dashboardNavigation"]),
  },
}
</script>
