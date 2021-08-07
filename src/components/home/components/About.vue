<template>
  <v-container class="home_about">
    <div class="head_text">
      <p>About Trustpaddi</p>
    </div>
    <div class="home_about_sides">
      <div class="home_about_card rounded-xl">
        <p class="text-body-2">
          TrustPaddi is Nigerians most trusted escrow/middleman platform built
          with the latest technology which enables safer transactions between
          online vendors (marketplaces, businesses etc) & individuals whether
          online or offline.
        </p>
        <v-btn
          to="/about"
          class="rounded-lg white--text text-capitalize"
          color="#4468E2"
          depressed
          >About Us</v-btn
        >
      </div>
      <img
        class="home_about_sides_img"
        src="../../assets/trust/about.svg"
        alt=""
      />
    </div>
  </v-container>
</template>

<style scoped>
@import url(../../assets/styles/home_about.css);
</style>
