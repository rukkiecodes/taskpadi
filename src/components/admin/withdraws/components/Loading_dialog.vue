<template>
  <div class="text-center">
    <v-dialog
      v-model="withdrawal.loading_dialog"
      hide-overlay
      persistent
      width="400"
    >
      <v-card color="blue accent-4" dark>
        <v-card-text class="pt-4 white--text">
          Please wait, while your transaction is proccessing.
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["withdrawal"]),
    withdrawal: {
      get() {
        return this.$store.state.withdrawal;
      },
      set(new_value) {
        this.$store.state.withdrawal = new_value;
      },
    },
  },
};
</script>
