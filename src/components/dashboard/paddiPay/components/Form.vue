<template>
  <v-dialog v-model="paddiPay.dialog" max-width="400" scrollable>
    <v-card class="mx-auto rounded-lg" max-height="600" flat>
      <v-card-title
        >Proccsess payment
        <v-spacer />
        <v-btn @click="paddiPay.dialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field
          color="deep-purple accent-4"
          label="Name"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          color="deep-purple accent-4"
          label="Email"
          type="email"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          color="deep-purple accent-4"
          label="Phone number"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          color="deep-purple accent-4"
          label="Address"
          outlined
          dense
        ></v-textarea>
        <v-btn
          color="deep-purple accent-4"
          class="text-capitalize"
          dark
          depressed
          large
          >Proccsess payment</v-btn
        >
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["paddiPay"]),
  },
}
</script>
