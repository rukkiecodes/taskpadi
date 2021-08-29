<template>
  <v-row class="deep-purple accent-4 ma-0" justify="center" align="center">
    <v-col cols="12">
      <v-container>
        <v-row justify="space-between" align="start">
          <v-col cols="12" sm="6" lg="3">
            <v-card flat color="transparent">
              <v-card-title class="white--text">Company</v-card-title>
              <v-card-text class="d-flex flex-column">
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >About Us</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Privacy Policy</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Terms and Conditions</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >P2P Transaction</router-link
                >
              </v-card-text>
              <v-card-actions>
                <v-btn icon color="white">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon color="white">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon color="white">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon color="white">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon color="white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
                    ></path>
                  </svg>
                </v-btn>
                <v-btn icon color="white">
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card flat color="transparent">
              <v-card-title class="white--text">Support</v-card-title>
              <v-card-text class="d-flex flex-column">
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Security
                </router-link>
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Fee Calculator</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Fraud Prevention</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Report A Bug</router-link
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card flat color="transparent">
              <v-card-title class="white--text">Resource</v-card-title>
              <v-card-text class="d-flex flex-column">
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Testimonials
                </router-link>
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >FAQ</router-link
                >
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Blog</router-link
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="3">
            <v-card flat color="transparent">
              <v-card-title class="white--text">Contact</v-card-title>
              <v-card-text class="d-flex flex-column">
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >contactus@trustpaddi.com
                </router-link>
                <router-link
                  class="text-decoration-none white--text"
                  to="/about"
                  >Lagos: +2349033275449</router-link
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
