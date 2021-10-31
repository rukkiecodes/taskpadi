<template>
  <v-col cols="12">
    <v-tabs
      color="deep-purple accent-4"
      v-model="tab"
      background-color="transparent"
    >
      <v-tab
        class="text-capitalize transparent"
        v-for="item in items"
        :key="item"
        v-text="item"
      />
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="deep-purple lighten-5">
        <Withdrawn />
      </v-tab-item>
      <v-tab-item class="deep-purple lighten-5">
        <Date />
      </v-tab-item>
      <v-tab-item class="deep-purple lighten-5">
        <Account />
      </v-tab-item>
      <v-tab-item class="deep-purple lighten-5">
        <WithdrawnTo />
      </v-tab-item>
    </v-tabs-items>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: ["Withdrawn", "Date", "Account", "Withdrawn to"],
  }),
  components: {
    Withdrawn: () => import("./components/withdrawn/Withdrawn.vue"),
    Date: () => import("./components/date/Date.vue"),
    Account: () => import("./components/account/Account.vue"),
    WithdrawnTo: () => import("./components/withdrawnTo/WithdrawnTo.vue"),
  },
}
</script>
