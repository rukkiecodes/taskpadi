<template>
  <v-col cols="12" sm="4" md="4">
    <v-card
      color="white"
      :height="height"
      flat
      class="d-flex flex-column justify-end rounded-lg"
    >
      <v-card-text class="d-flex flex-column">
        <span class="text-body-2 font-weight-bold grey--text text--darken-4"
          >Create Transaction</span
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 50;
        case "sm":
          return 50;
        case "md":
          return 70;
        case "lg":
          return 70;
        case "xl":
          return 70;
      }
    },
  },
};
</script>
