<template>
  <nav>
    <v-app-bar color="#EFF1FF" flat app>
      <v-btn
        @click="drawer = !drawer"
        class="mr-4 hidden-lg-and-up"
        fab
        depressed
        small
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-bold grey--text text--darken-2"
        >Dashboard</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer
      color="indigo accent-4"
      width="250"
      v-model="drawer"
      app
    >
      <v-card flat color="transparent py-10">
        <v-card-title
          class="white--text font-weight-black d-flex justify-center"
        >
          <v-avatar size="60" tile class="pa-1 mr-3">
            <v-img
              lazy-src="../../assets/paddi.png"
              src="../../assets/paddi.png"
            />
          </v-avatar>
          Trustpaddi
        </v-card-title>
      </v-card>
      <v-list class="px-3" dark dense>
        <Onboarding />
        <Menu class="mt-3" />
        <Transactions />
        <My_store class="mt-3" />
        <Withdrawals class="mt-3" />
        <Refunds class="mt-3" />
        <Customer_support class="mt-3" />
        <Account class="mt-3" />
      </v-list>

      <template v-slot:append>
        <div class="pa-2 d-flex justify-space-between">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                to="/"
                height="34"
                class="rounded-lg indigo--text px-0"
                v-bind="attrs"
                v-on="on"
                depressed
                x-small
              >
                <v-tooltip>
                  <span>test</span>
                </v-tooltip>
                <v-icon>mdi-logout-variant mdi-flip-h</v-icon>
              </v-btn>
            </template>
            <span>Sign out</span>
          </v-tooltip>
          <App_theme_menu />
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// @ts-nocheck
export default {
  data: () => ({
    drawer: true,
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
    App_theme_menu: () => import("./components/App_theme_menu.vue")
  },
};
</script>

<style scoped>
@import url(../../assets/icon/css/materialdesignicons.min.css);
</style>
