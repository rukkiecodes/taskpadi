<template>
  <div>
    <v-btn
      class="text-capitalize rounded-lg white--text mt-10"
      color="#4169E2"
      block
      depressed
      @click="provider_services.provider.dialog = true"
    >
      Duration in days
    </v-btn>
    <v-dialog persistent v-model="provider_services.provider.dialog" width="310">
      <v-card class="ma-0 pa-0">
        <v-toolbar flat dense>
          <v-spacer />
          <v-btn @click="provider_services.provider.dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="ma-0 pa-2">
          <v-date-picker
            color="#4468E2"
            full-width
            v-model="picker"
            @change="set_duration_with_picker"
          ></v-date-picker>
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
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    set_duration_with_picker(e) {
      this.provider_services.provider.duration_input = e;
      this.provider_services.provider.dialog = false;
      console.log(this.provider_services.provider.duration_input);
    },
  },
  computed: {
    ...mapState(["provider_services"]),
  },
};
</script>