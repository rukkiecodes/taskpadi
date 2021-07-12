<template>
  <div>
    <v-btn
      class="text-capitalize rounded-lg white--text"
      color="#4169E2"
      depressed
      block
      @click="custumers_crypto.custumer.dialog = true"
    >
      Custom
    </v-btn>
    <v-dialog persistent v-model="custumers_crypto.custumer.dialog" width="310">
      <v-card class="ma-0 pa-0">
        <v-toolbar flat dense>
          <v-spacer />
          <v-btn @click="custumers_crypto.custumer.dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="ma-0 pa-2">
          <v-time-picker
            @change="set_duration_with_picker"
            color="#4169E2"
            v-model="time"
            type="month"
            full-width
          ></v-time-picker>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    time: "11:15",
  }),
  methods: {
    set_duration_with_picker(e) {
      this.custumers_crypto.custumer.duration_input = e;
      this.custumers_crypto.custumer.dialog = false;
    },
  },
  computed: {
    ...mapState(["custumers_crypto"]),
  },
};
</script>