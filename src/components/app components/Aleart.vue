<template>
  <v-snackbar
    top
    right
    :width="snackbarWidth"
    :color="snackbar.color"
    text
    v-model="snackbar.snack"
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="snackbar.buttonColor"
        icon
        v-bind="attrs"
        @click="snackbar.snack = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    text: `Hello, I'm a snackbar`,
  }),
  computed: {
    ...mapState(["snackbar"]),
    snackbarWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 500;
        case "xl":
          return 500;
      }
    },
  },
};
</script>
