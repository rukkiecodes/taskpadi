<template>
  <v-row justify="start">
    <v-col cols="12">
      <CreateTransaction />
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-tabs
          color="deep-purple accent-4"
          v-model="tab"
          background-color="transparent"
        >
          <v-tab
            class="text-capitalize"
            v-for="item in items"
            :key="item"
            v-text="item"
          />
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <Completed />
          </v-tab-item>
          <v-tab-item>
            <Ongoing />
          </v-tab-item>
          <v-tab-item>
            <Pending />
          </v-tab-item>
          <v-tab-item>
            <Failed />
          </v-tab-item>
          <v-tab-item>
            <Canceled />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    items: ["Completed", "Ongoing", "Pending", "Failed", "Canceled"],
  }),
  components: {
    Completed: () => import("./components/completed/Completed.vue"),
    Ongoing: () => import("./components/ongoing/Ongoing.vue"),
    Pending: () => import("./components/pending/Pending.vue"),
    Failed: () => import("./components/failed/Failed.vue"),
    Canceled: () => import("./components/canceled/Canceled.vue"),
    CreateTransaction: () => import("./CreateTransaction.vue"),
  },
};
</script>
