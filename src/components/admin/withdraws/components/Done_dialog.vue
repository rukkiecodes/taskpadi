<template>
  <div class="text-center">
    <v-dialog
      v-model="withdrawal.done_dialog"
      hide-overlay
      persistent
      width="400"
    >
      <v-card color="white" dark>
        <v-system-bar color="white" height="30">
          <v-spacer />
          <v-btn @click="withdrawal.done_dialog = false" class="mr-n2" icon>
            <v-icon class="grey--text text--darken-4">mdi-close</v-icon>
          </v-btn>
        </v-system-bar>
        <v-card-text class="indigo--text text--accent-4 text-center text-body-2">
          Your withdrawal was successful. Your payments will be in your account any
          moment now.
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
