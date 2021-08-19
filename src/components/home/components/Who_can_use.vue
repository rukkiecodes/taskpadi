<template>
  <v-container class="mt-16">
    <v-row justify="space-between" align="start">
      <v-col class="text-center text-heading text-sm-h6 text-md-h5" cols="12">
        <h1>Who can use Trustpaddi</h1>
      </v-col>

      <v-col v-for="(card, index) in who_can_use" :key="index" cols="12" sm="4" class="mt-8">
        <v-card flat color="indigo lighten-5" class="rounded-xl">
          <v-card-text class="text-center">
            <v-avatar class="my-4" size="120" color="white">
              <img :src="card.image" />
            </v-avatar>
          </v-card-text>
          <v-card-title class="grey--text text--darken-4" v-text="card.head" />
          <v-card-text class="grey--text text--darken-3 text-body-2" v-text="card.body" />
          <v-card-text>
            <v-btn
              small
              depressed
              color="blue accent-4"
              v-text="card.button_text"
              class="rounded-lg text-capitalize white--text py-4"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import who_can_use from "./who_can_use"
export default {
  data: () => ({
    who_can_use
  }),
};
</script>
