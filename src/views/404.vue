<template>
  <v-container class="d-flex justify-center align-center errorPage">
    <v-row justify="space-between" align="center">
      <v-col cols="12">
        <div>
          <span class="indigo--text text--accent-4 text-h1">404 </span>
        </div>
        <div>
          <span class="grey--text text--darken-4 text-h6">Page not found</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="indigo accent-4"
          class="rounded-lg white--text"
          depressed
          x-large
          to="/"
        >
          Back to Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.errorPage {
  height: 100vh;
}
</style>
