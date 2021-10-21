<template>
  <v-card color="transparent" class="px-3" flat>
    <v-card-text class="px-0">
      <v-btn
        dark
        block
        x-large
        depressed
        class="text-capitalize"
        color="deep-purple accent-4"
      >
        Initiate escrow
        <v-icon right>mdi-arrow-up</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="px-0 pt-0">
      <v-btn
        dark
        block
        x-large
        outlined
        depressed
        class="text-capitalize"
        color="deep-purple accent-4"
      >
        Withdraw
        <v-icon right>mdi-arrow-down</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>
