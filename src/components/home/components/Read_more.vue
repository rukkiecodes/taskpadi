<template>
  <div>
    <v-dialog
      :fullscreen="$vuetify.breakpoint.mobile"
      v-model="dialog"
      scrollable
      max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="white--text rounded-lg text-capitalize"
          color="blue darken-3"
          depressed
          small
          v-bind="attrs"
          v-on="on"
        >
          Read more
        </v-btn>
      </template>

      <v-card>
        <v-toolbar flat dense>
          <v-avatar size="30">
            <img src="../../../assets/paddi.png" alt="" />
          </v-avatar>
          <v-toolbar-title class="grey--text text--darken-4 ml-3">
            TrustPaddi
          </v-toolbar-title>
          <v-spacer />
          <v-btn @click="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-card-text class="mt-3 text-body-2">
            Transact Securely with online vendors & marketplaces, gain customers
            trust with TrustPaddi
          </v-card-text>
          <v-card-text class="text-body-2 mt-5">
            <v-avatar class="dialog_avatar" size="70" color="#D9E1F9">
              <img
                src="../../../assets/trust/sad-emoticon-square-face.png"
                alt=""
                style="width: 70%; height: auto"
              />
            </v-avatar>
          </v-card-text>
          <v-card-text class="text-body-2 mt-n5">
            We know how Devastating it can be losing money to an online
            fraudster, and if not Cash On Delivery, we're sure you won't make
            any purchases.
          </v-card-text>
          <v-card-text class="text-body-2 mt-5">
            <v-avatar class="dialog_avatar" size="70" color="#D9E1F9">
              <img
                src="../../../assets/trust/tap.png"
                alt=""
                style="width: 70%; height: auto"
              />
            </v-avatar>
          </v-card-text>
          <v-card-text class="text-body-2 mt-n5">
            For business owners and service providers, We also know how hard it
            can be getting potential customers to trust the genuineness of your
            upcoming brand online, on the other hand Cash on delivery isn't
            always a convenient option for you.
          </v-card-text>
          <v-card-text class="text-body-2 mt-5">
            <v-avatar class="dialog_avatar" size="70" color="#D9E1F9">
              <img
                src="../../../assets/trust/cooperation.png"
                alt=""
                style="width: 70%; height: auto"
              />
            </v-avatar>
          </v-card-text>
          <v-card-text class="text-body-2 mt-n5">
            Therefore, It all boils down to the issue of "trust" and this is
            what TrustPaddi is all about, bridging the trust gap between
            potential customers, service providers & businesses online while
            protecting there various interest.
          </v-card-text>
          <v-divider class="my-5" />
          <v-card-text class="text-h6 grey--text text--darken-4">
            Introducing TrustPaddi
          </v-card-text>
          <v-card-text class="text-body-2 font-weight-bold mt-n5">
            The safest & surest way to transact online
          </v-card-text>
          <v-card-text
            v-for="(feature, index) in features"
            :key="index"
            class="text-body-2 mt-n2"
          >
            <v-icon class="mr-3 green--text text--accent-3">mdi-check</v-icon>
            <span class="font-weight-bold">{{ feature.title }}:</span>
            {{ feature.body }}
          </v-card-text>
          <v-card-text class="text-body-2 mt-n2">
            TrustPaddi is Nigerians most trusted escrow/middleman platform built
            with the latest technology which enables safer transactions between
            online vendors (marketplaces, businesses etc) & individuals whether
            online or offline. Know More
            <v-btn
              depressed
              to="/about"
              color="blue darken-3"
              class="white--text text-capitalize rounded-pill"
              x-small
              >About Us</v-btn
            >
          </v-card-text>
          <v-card-text class="text-body-2 mt-n2">
            With TrustPaddi Cash on delivery just got better cause we provide
            full escrow protection for both parties and stress-free delivery
            options for online business owners
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    isMobile: false,
    features: [
      {
        title: "Convenient",
        body: "TrustPaddi is convenient for both buyer and the seller",
      },
      {
        title: "Secure",
        body:
          "TrustPaddi ensures buyer and seller protection, and protects the interest of both parties",
      },
      {
        title: "Trusted",
        body: "Our platform has been used by many and it's trusted by all",
      },
      {
        title: "Timely Deliveries",
        body:
          "We help deliver goods on time to customers with our network of trusted logistics partners",
      },
    ],
  }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>