<template>
  <v-col cols="12" sm="6" lg="4">
    <v-row justify="space-between" align="start">
      <v-col cols="12">
        <v-card height="300" color="#f6f6f6" flat>
          <v-img
            contain
            height="300"
            src="../../../../../assets/trust/shoe4.png"
          ></v-img>
        </v-card>
      </v-col>
      <v-col v-for="(shoe, i) in shoes" :key="i" cols="4">
        <v-card flat>
          <v-img contain :src="shoe.image"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    shoes: [
      {
        image: require("../../../../../assets/trust/shoe1.png"),
      },
      {
        image: require("../../../../../assets/trust/shoe2.png"),
      },
      {
        image: require("../../../../../assets/trust/shoe3.png"),
      },
    ],
  }),
}
</script>
