<template>
  <v-col cols="12">
    <v-card class="mx-auto rounded-lg" width="800" flat>
      <v-card-title>Proccsess payment</v-card-title>
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6" class="pb-0">
            <v-text-field
              color="deep-purple accent-4"
              label="Name"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0">
            <v-text-field
              color="deep-purple accent-4"
              label="Email"
              type="email"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0 mt-0">
            <v-text-field
              color="deep-purple accent-4"
              label="Phone number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0 mt-0">
            <v-text-field
              color="deep-purple accent-4"
              label="Address"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="deep-purple accent-4" class="text-capitalize" dark depressed large>Proccsess payment</v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {}
</script>
