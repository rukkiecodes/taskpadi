<template>
  <v-col cols="12" md="12">
    <v-card
      color="indigo accent-4"
      flat
      class="d-flex flex-column justify-end rounded-xl custum_card"
    >
      <img
        src="../../../../assets/trust/interactive_form_icons/customer.png"
        width="280"
      />
      <v-card-text class="d-flex flex-column custum_card_text">
        <v-row class="mt-0" justify="space-between" align="end">
          <v-col cols="12">
            <span class="text-h5 white--text font-weight-black"
              >Hello Mr John!</span
            >
          </v-col>
          <v-col cols="12" sm="6">
            <span class="text-body-1 font-weight-regular white--text"
              >Today you have new 9 new transactions. Also you might need to
              hire an assistant</span
            >
          </v-col>
          <v-col cols="12">
            <v-btn color="#F49F1C" depressed class="rounded-lg white--text">
              Read More
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
.custum_card {
  position: relative;
  overflow: hidden;
}

.custum_card img {
  position: absolute;
  top: 0;
  right: 0;
}

.custum_card .custum_card_text {
  z-index: 1;
}
</style>
