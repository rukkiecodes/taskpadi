<template>
  <v-navigation-drawer
    app
    right
    color="white"
    v-model="dashboardNavigation.rightDrawerState"
  >
    <v-list-item dense>
      <v-card
        flat
        width="100%"
        height="200"
        color="transparent"
        class="d-flex flex-column justify-center align-center"
      >
        <v-avatar tile size="60">
          <img src="../../../assets/paddi.png" />
        </v-avatar>
        <span
          class="text-body-1 mt-4 grey--text text--darken-4 text-uppercase font-weight-bold"
        >
          TrustPaddi
        </span>
        <span class="text-caption mt-0 grey--text text--darken-3">
          Safer Transactions, Happy people
        </span>
      </v-card>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
// @ts-nocheck
import { mapState } from "vuex"
export default {
  data: () => ({
    drawer: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.removeBorder()
    })
  },
  methods: {
    setCurrentRoute() {
      this.dashboardNavigation.currentRoute = window.location.pathname
    },
    removeBorder() {
      const border = document.querySelectorAll(".v-navigation-drawer__border")
      if (border) {
        for (let i = 0; i < border.length; i++) {
          border[i].style.display = "none"
        }
      }
    },
  },
  computed: {
    ...mapState(["dashboardNavigation"]),
  },
}
</script>
