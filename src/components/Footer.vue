<template>
  <div class="footer mt-16">
    <v-container class="footer_container py-12">
      <div class="footer_container_row row_one">
        <p class="head text-h6 font-weight-bold">Company</p>
        <router-link to="/">About Us</router-link>
        <router-link to="/">Privacy Policy</router-link>
        <router-link to="/">Terms and Conditions</router-link>
        <router-link to="/">P2P Transaction</router-link>
        <div class="social_buttons mt-5">
          <v-btn class="button" icon small>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="button" icon small>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="button" icon small>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="button" icon small>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="button svg_button" icon small>
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
          <v-btn class="button" icon small>
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="footer_container_row row_one">
        <p class="head text-h6 font-weight-bold">Support</p>
        <router-link to="/">Security</router-link>
        <router-link to="/">Fee Calculator</router-link>
        <router-link to="/">Fraud Prevention</router-link>
        <router-link to="/">Report A Bug</router-link>
      </div>
      <div class="footer_container_row row_one">
        <p class="head text-h6 font-weight-bold">Resource</p>
        <router-link to="/">Testimonials</router-link>
        <router-link to="/">FAQ</router-link>
        <router-link to="/">Blog </router-link>
      </div>
      <div class="footer_container_row row_one">
        <p class="head text-h6 font-weight-bold">Contact</p>
        <router-link to="/">contactus@trustpaddi.com</router-link>
        <router-link to="/">Lagos: +2349033275449</router-link>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
@import url(../assets/styles/footer.css);
</style>
