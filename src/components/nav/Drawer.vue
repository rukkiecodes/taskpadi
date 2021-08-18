<template>
  <v-navigation-drawer
    color="blue accent-4"
    v-model="app_drawer.drawer"
    app
  >
    <v-list class="px-4" dark dense>
      <v-list-item
        v-for="item in drawer_routs"
        :key="item.title"
        :to="item.to"
        link
        active-class="white blue--text text--accent-4 rounded-lg"
      >
        <v-list-item-icon>
          <v-icon size="17">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["app_drawer"]),
    ...mapGetters(["drawer_routs"]),
    // drawer: {
    //   get() {
    //     return this.$store.state.drawer;
    //   },
    //   set(new_value) {
    //     this.$store.state.drawer = new_value;
    //   },
    // },
  },
};
</script>
