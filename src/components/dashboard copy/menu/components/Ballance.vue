<template>
  <v-col cols="12">
    <v-row justify="space-between" align="start">
      <v-col v-for="(ballance, i) in ballances" :key="i" cols="12" md="6">
        <v-card flat>
          <v-card-title v-text="ballance.title" />
          <v-card-subtitle class="d-flex align-center"
            ><v-icon small>mdi-currency-usd</v-icon>
            {{ ballance.subtitle }}</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    ballances: [
      {
        title: "Current Ballance",
        subtitle: "5,000,000",
      },
      {
        title: "Trust Ballance",
        subtitle: "3,500,000",
      },
    ],
  }),
};
</script>
