<template>
  <v-snackbar top right :color="snackbar.color" text v-model="snackbar.snack">
    <v-icon class="mr-4" :color="snackbar.color">mdi-alert</v-icon>
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
  },
};
</script>
