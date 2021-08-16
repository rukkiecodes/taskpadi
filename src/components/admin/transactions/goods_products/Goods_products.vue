<template>
  <v-container>
    <Stats />
    <Create_transaction_dialog />
    <v-card flat>
      <v-tabs v-model="tab" color="blue accent-4">
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
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    tab: null,
  }),
  components: {
    Create_transaction_dialog: () => import("./Create_transaction_dialog.vue"),
    Completed: () => import("./components/completed/Completed.vue"),
    Ongoing: () => import("./components/ongoing/Ongoing.vue"),
    Pending: () => import("./components/pending/Pending.vue"),
    Failed: () => import("./components/failed/Failed.vue"),
    Canceled: () => import("./components/canceled/Canceled.vue"),
    Stats: () => import("./Stats.vue"),
  },
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("goods_products route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/goods_products";
    },
  },

  computed: {
    ...mapState(["dash_nav"]),
    dash_nav: {
      get() {
        return this.$store.state.dash_nav;
      },
      set(new_value) {
        this.$store.state.dash_nav = new_value;
      },
    },
  },
};
</script>
