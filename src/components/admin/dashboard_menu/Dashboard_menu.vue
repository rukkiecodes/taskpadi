<template>
  <v-container fluid id="scroll-area" style="background: #EFF1FF" class="pa-0">
    <smooth-scrollbar :options="{ damping: 0.05 }">
      <v-container class="px-4">
        <v-row justify="space-between" align="start">
          <Current_ballance />
          <Trust_ballance />
          <Create_transaction />
          <Withdraw />
          <Create_paddi_link />
          <Paddi_transaction />
          <Onboarding />
        </v-row>
      </v-container>
    </smooth-scrollbar>
  </v-container>
</template>

<script>
import Current_ballance from "./components/Current_ballance.vue";
import Trust_ballance from "./components/Trust_ballance.vue";
import Create_transaction from "./components/Create_transaction.vue";
import Withdraw from "./components/Withdraw.vue";
import Create_paddi_link from "./components/Create_paddi_link.vue";
import Paddi_transaction from "./components/Paddi_transaction.vue";
import Onboarding from "./components/Onboarding.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Current_ballance,
    Trust_ballance,
    Create_transaction,
    Withdraw,
    Create_paddi_link,
    Paddi_transaction,
    Onboarding,
  },
  created() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.classList.add("hide");
  },
  mounted() {
    this.my_logs();
    this.default_route();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/menu";
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

<style>
#scroll-area {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.hide::-webkit-scrollbar {
  width: 0px;
}

.hide_overlay {
  z-index: 0 !important;
}
</style>
