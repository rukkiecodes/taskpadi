<template>
  <v-navigation-drawer v-model="drawer" temporary fixed hide-overlay>
    <v-list class="rounded-lg" nav dense>
      <v-list-item
        v-for="item in drawer_routs"
        :key="item.title"
        :to="item.to"
        link
        active-class="blue lighten-5"
      >
        <v-list-item-icon class="blue darken-2 px-2 py-4 rounded-lg">
          <v-icon size="17" class="white--text">{{ item.icon }}</v-icon>
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
    ...mapState(["drawer"]),
    ...mapGetters(["drawer_routs"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(new_value) {
        this.$store.state.drawer = new_value;
      },
    },
  },
};
</script>
