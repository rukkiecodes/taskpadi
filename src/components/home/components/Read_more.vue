<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <span
        class="blue--text text--darken-3 font-weight-bold"
        v-bind="attrs"
        v-on="on"
      >
        Read more
      </span>
    </template>
    <v-card width="350">
      <v-card-text>
        We know how Devastating it can be losing money to an online fraudster,
        and if not Cash On Delivery, we're sure you won't make any purchases.
      </v-card-text>
      <v-card-text>
        For business owners and service providers, We also know how hard it can
        be getting potential customers to trust the genuineness of your upcoming
        brand online, on the other hand Cash on delivery isn't always a
        convenient option for you.
      </v-card-text>
      <v-card-text>
        Therefore, It all boils down to the issue of "trust" and this is what
        TrustPaddi is all about, bridging the trust gap between potential
        customers, service providers & businesses online while protecting there
        various interest.
      </v-card-text>
    </v-card>
  </v-menu>
</template>
