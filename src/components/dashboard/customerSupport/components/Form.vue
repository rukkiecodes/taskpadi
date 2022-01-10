<template>
  <v-col cols="12" md="6">
    <v-card flat>
      <v-card-text>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6">
            <v-text-field
              hide-details
              outlined
              dense
              color="deep-purple accent-4"
              label="Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              hide-details
              outlined
              dense
              color="deep-purple accent-4"
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              hide-details
              outlined
              dense
              color="deep-purple accent-4"
              label="Phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              hide-details
              outlined
              dense
              color="deep-purple accent-4"
              label="Subject"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              hide-details
              outlined
              dense
              color="deep-purple accent-4"
              label="Subject"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-file-input
              dense
              outlined
              hide-details
              truncate-length="15"
              label="Image(*Optional)"
              color="deep-purple accent-4"
              prepend-icon="mdi-image-outline"
            ></v-file-input>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn
              class="text-capitalize"
              color="deep-purple accent-4"
              dark
              block
              depressed
              >Create Support Ticket</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>
