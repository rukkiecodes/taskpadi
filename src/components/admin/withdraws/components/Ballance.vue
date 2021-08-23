<template>
  <v-card
    :height="height"
    flat
    color="white"
    class="d-flex flex-column justify-end pa-5 rounded-xl"
  >
    <v-card-text class="d-flex flex-column">
      <span class="text-h5 grey--text text--darken-3 font-weight-bold"
        >Withdrawable Ballance</span
      >
      <span class="text-body-1 font-weight-bold grey--text text--darken-3"
        >N 1,500,000</span
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 160;
        case "sm":
          return 160;
        case "md":
          return 335;
        case "lg":
          return 335;
        case "xl":
          return 335;
      }
    },
  },
};
</script>

<style></style>
