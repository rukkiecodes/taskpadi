<template>
  <div class="text-center ma-2">
    <v-btn dark @click="snackbar.snackbar_state = true"> Open Snackbar </v-btn>
    <v-snackbar v-model="snackbar.snackbar_state">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar.snackbar_state = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState(["snackbar"]),
    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(new_value) {
        this.$store.state.snackbar = new_value;
      },
    },
  },
};
</script>