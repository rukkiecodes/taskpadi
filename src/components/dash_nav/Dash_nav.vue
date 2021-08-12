<template>
  <nav>
    <v-app-bar color="#EFF1FF" flat app>
      <v-btn @click="drawer = !drawer" fab depressed small>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="blue accent-4" width="260" v-model="drawer" app>
      <v-list class="px-4" dark dense>
        <Onboarding />
        <Menu />
        <Transactions />
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Onboarding from "./components/Onboarding.vue";
import Menu from "./components/Menu.vue";
import Transactions from "./components/Transactions.vue";
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    Onboarding,
    Menu,
    Transactions,
  },
};
</script>

<style scoped>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>
