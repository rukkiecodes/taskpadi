<template>
  <v-col cols="12" sm="5">
    <v-card
      flat
      class="d-flex flex-column justify-end align-start"
      :height="height"
    >
      <v-card-title class="pb-0">
        Withdrawable Ballance
      </v-card-title>
      <v-card-text>
        N 1,500,000
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
          return 130;
        case "sm":
          return 195;
        case "md":
          return 196;
        case "lg":
          return 196;
        case "xl":
          return 196;
      }
    },
  },
};
</script>
