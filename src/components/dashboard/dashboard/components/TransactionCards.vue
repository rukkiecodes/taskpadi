<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card min-height="190" color="#0096B7" flat dark>
        <v-toolbar color="transparent" flat dense>
          <v-toolbar-title>Current Ballance</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-chip color="transparent">
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
    </v-col>
    <v-col cols="12" sm="6">
      <v-card min-height="190" color="#fff" flat>
        <v-toolbar color="transparent" flat dense>
          <v-toolbar-title>Trust Balance</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text class="text-h4 grey--text text-darken-4 font-weight-bold"
          >₦380,000.90</v-card-text
        >
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card min-height="100" flat>
        <v-toolbar color="transparent" flat dense>
          <v-toolbar-title>Total transactions</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-chip color="grey lighten-3" small>
            <span class="text-body-2 grey--text text--darken-3">Month</span>
            <v-icon class="grey--text text--darken-3" small right>mdi-chevron-down</v-icon>
          </v-chip>
        </v-toolbar>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card min-height="100" flat>
        <v-toolbar color="transparent" flat dense>
          <v-toolbar-title>Total withdrawals</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-chip color="grey lighten-3" small>
            <span class="text-body-2 grey--text text--darken-3">Month</span>
            <v-icon class="grey--text text--darken-3" small right>mdi-chevron-down</v-icon>
          </v-chip>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
