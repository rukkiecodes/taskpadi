<template>
  <v-app>
    <v-app-bar clipped-left dense app>
      <v-btn @click="drawer = !drawer" fab depressed small>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app permanent>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
