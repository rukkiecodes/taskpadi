<template>
  <nav>
    <v-app-bar color="white" flat app>
      <v-btn
        @click="mini_drawer = !mini_drawer"
        color="white"
        elevation="3"
        class="ml-n5 mt-n1 mr-5 rounded-r-lg blue--text text--accent-4 hidden-md-and-down"
        height="35"
        x-small
      >
        <v-icon small v-show="mini_drawer == false">mdi-arrow-left</v-icon>
        <v-icon small v-show="mini_drawer == true">mdi-arrow-right</v-icon>
      </v-btn>

      <v-btn
        @click="drawer = !drawer"
        class="hidden-lg-and-up mr-5"
        icon
        depressed
        small
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      :mini-variant="mini_drawer"
      mini-variant-width="75"
      color="blue accent-4"
      width="265"
      v-model="drawer"
      app
    >
      <v-list class="px-4" dark dense>
        <Onboarding />
        <Menu />
        <Transactions />
        <My_store />
        <Withdrawals />
        <Refunds />
        <Customer_support />
        <Account />
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    mini_drawer: false,
  }),
  components: {
    Onboarding: () => import("./components/Onboarding.vue"),
    Menu: () => import("./components/Menu.vue"),
    Transactions: () => import("./components/Transactions.vue"),
    My_store: () => import("./components/My_store.vue"),
    Withdrawals: () => import("./components/Withdrawals.vue"),
    Refunds: () => import("./components/Refunds.vue"),
    Customer_support: () => import("./components/Customer_support.vue"),
    Account: () => import("./components/Account.vue"),
  },
};
</script>

<style scoped>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>
