<template>
  <nav>
    <v-app-bar color="#EFF1FF" flat app>
      <v-btn @click="drawer = !drawer" fab depressed small>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>Dash</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer color="blue accent-4" width="265" v-model="drawer" app>
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
    drawer: false,
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
