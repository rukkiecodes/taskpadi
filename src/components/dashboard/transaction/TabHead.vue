<template>
  <v-tabs
    color="deep-purple accent-4"
    v-model="dashboardNavigation.transactionTabs"
    align-with-title
  >
    <v-tab class="text-capitalize" v-for="tab in tabs" :key="tab" v-text="tab" />
  </v-tabs>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["dashboardNavigation"]),
    ...mapGetters(["tabs"]),
  },
};
</script>
