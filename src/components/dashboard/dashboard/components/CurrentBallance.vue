<template>
  <v-card
    min-height="150"
    class="rounded-lg"
    color="#0096B7"
    flat
    dark
  >
    <v-toolbar color="transparent" flat dense>
      <v-toolbar-title class="text-body-1">Current Ballance</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip label small color="transparent">
        <v-icon small left>mdi-arrow-top-right</v-icon>
        <span class="text-body-2">-13.34%</span>
      </v-chip>
    </v-toolbar>

    <v-card-text class="text-h4 white--text font-weight-bold"
      >₦1,200,000.90</v-card-text
    >
    <v-card-text class="text-subtitle-2 white--text"
      >Ledger Balance : $1,229</v-card-text
    >
  </v-card>
</template>
