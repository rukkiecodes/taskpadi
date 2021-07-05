<template>
  <div class="text-center ma-2">
    <v-snackbar
      top
      right
      :color="snackbar_state.snackbar.snackbar_color"
      v-model="snackbar_state.snackbar.snackbar_state"
    >
      <span :class="snackbar_state.snackbar.snackbar_text_color">{{
        snackbar_state.snackbar.text
      }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbar_state.snackbar.snackbar_button_color"
          text
          v-bind="attrs"
          @click="snackbar_state.snackbar.snackbar_state = false"
        >
          <v-icon>mdi-close</v-icon>
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
    ...mapState(["snackbar_state"]),
    // snackbar: {
    //   get() {
    //     return this.$store.state.snackbar;
    //   },
    //   set(new_value) {
    //     this.$store.state.snackbar = new_value;
    //   },
    // },
  },
};
</script>