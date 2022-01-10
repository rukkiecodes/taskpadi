<template>
  <v-col cols="12">
    <v-row justify="space-between" align="start">
      <v-col cols="12" sm="6">
        <v-card min-height="100" flat>
          <v-toolbar color="transparent" flat dense>
            <v-toolbar-title>Total transactions</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-chip color="grey lighten-3" small>
              <span class="text-body-2 grey--text text--darken-3">Month</span>
              <v-icon class="grey--text text--darken-3" small right
                >mdi-chevron-down</v-icon
              >
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
              <v-icon class="grey--text text--darken-3" small right
                >mdi-chevron-down</v-icon
              >
            </v-chip>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {}
</script>

<style></style>
