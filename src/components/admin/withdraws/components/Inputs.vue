<template>
  <v-card color="white" flat class="pa-5 pt-10 rounded-xl">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          class="rounded-lg"
          label="Name of Bank"
          color="indigo accent-4"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          class="rounded-lg"
          color="indigo accent-4"
          label="Account Number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          readonly
          disabled
          outlined
          value="John Doe"
          class="rounded-lg"
          label="Account Name"
          color="indigo accent-4"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          outlined
          class="rounded-lg"
          color="indigo accent-4"
          label="Amount to be withdrawn"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-btn
          block
          depressed
          height="53"
          color="indigo accent-4"
          :disabled="withdrawal.loading_dialog"
          :loading="withdrawal.loading_dialog"
          @click="load_loading_dialog"
          class="rounded-lg text-capitalize text-body-1 white--text font-weight-bold "
        >
          Start loading
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    Loading_dialog: () => import("./Loading_dialog.vue"),
  },
  methods: {
    load_loading_dialog() {
      this.withdrawal.loading_dialog = true;
      setTimeout(() => {
        this.withdrawal.loading_dialog = false;
        this.withdrawal.done_dialog = true;
      }, 4000);
    },
  },
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

<style></style>
