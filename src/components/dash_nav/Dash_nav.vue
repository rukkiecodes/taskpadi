<template>
  <div>
    <v-app-bar flat app>
      <v-btn @click="drawer = !drawer" fab depressed small>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer width="200" v-model="drawer" app>
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
  </div>
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
