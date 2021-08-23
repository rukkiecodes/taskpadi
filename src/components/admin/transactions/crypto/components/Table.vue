<template>
  <v-card flat>
    <v-tabs v-model="tab" color="indigo accent-4">
      <v-tab active-class="font-weight-bold" class="text-capitalize"
        >Completed</v-tab
      >
      <v-tab active-class="font-weight-bold" class="text-capitalize"
        >Ongoing</v-tab
      >
      <v-tab active-class="font-weight-bold" class="text-capitalize"
        >Pending</v-tab
      >
      <v-tab active-class="font-weight-bold" class="text-capitalize"
        >Failed</v-tab
      >
      <v-tab active-class="font-weight-bold" class="text-capitalize"
        >Canceled</v-tab
      >
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <Completed />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Ongoing />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Pending />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Failed />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Canceled />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
  components: {
    Completed: () => import("./completed/Completed.vue"),
    Ongoing: () => import("./ongoing/Ongoing.vue"),
    Pending: () => import("./pending/Pending.vue"),
    Failed: () => import("./failed/Failed.vue"),
    Canceled: () => import("./canceled/Canceled.vue"),
  },
};
</script>
