<template>
  <nav>
    <v-app-bar color="#EFF1FF" flat app>
      <v-btn @click="drawer = !drawer" fab depressed small>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="blue accent-4" width="220" v-model="drawer" app>
      <v-list class="px-4" dark dense>
        <v-list-item
          v-for="(route, index) in dash_navigation"
          :key="index"
          :to="route.to"
          link
          class="mb-2"
          active-class="white blue--text text--accent-4 rounded-lg"
        >
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{
              route.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    ...mapGetters(["dash_navigation"]),
  },
};
</script>
