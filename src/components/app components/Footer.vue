<template>
  <v-sheet color="#210070">
    <v-container>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title
              class="white--text text-center"
              style="font-family: 'Montserrat', sans-serif !important;"
              >Company</v-card-title
            >
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Testimonials
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                P2P Transaction
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                FAQs
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Blog
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Careers
              </router-link>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title
              class="white--text text-center"
              style="font-family: 'Montserrat', sans-serif !important;"
              >Support</v-card-title
            >
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Security
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Fee Calculator
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Fraud Prevention
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                to="/"
                style="font-family: 'Montserrat', sans-serif !important;"
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
              >
                Report a Bug
              </router-link>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title
              class="white--text text-center"
              style="font-family: 'Montserrat', sans-serif !important;"
              >Reach us</v-card-title
            >
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  style="font-family: 'Montserrat', sans-serif !important;"
                  >contact@trustpaddi.com</v-list-item-title
                >
              </v-list-item>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-cellphone-android</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  style="font-family: 'Montserrat', sans-serif !important;"
                  >+2349033275449</v-list-item-title
                >
              </v-list-item>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  style="font-family: 'Montserrat', sans-serif !important;"
                  >Lagos</v-list-item-title
                >
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title
              class="white--text text-center"
              style="font-family: 'Montserrat', sans-serif !important;"
              >Stay up to date</v-card-title
            >
            <v-card-text class="pb-0 mb-0">
              <v-text-field
                flat
                dark
                dense
                full-width
                hide-details
                solo-inverted
                class="rounded-lg"
                placeholder="Your email address"
                append-icon="mdi-send-outline mdi-rotate-315"
                style="font-family: 'Montserrat', sans-serif !important;"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider dark class="my-5" />
      <v-row
        align="center"
        justify="space-between"
        class="flex-column-reverse flex-sm-row"
      >
        <v-col class="text-center text-sm-left" cols="12" sm="4" lg="4">
          <span
            style="font-family: 'Montserrat', sans-serif !important;"
            class="grey--text text--lighten-2 text-body-2 text-sm-caption text-md-body-2 mt-sm-3"
          >
            © 2021 TrustPaddi. All rights reserved
          </span>
        </v-col>
        <v-col
          sm="4"
          lg="4"
          cols="12"
          class="d-flex justify-space-around align-center"
        >
          <router-link
            to="/"
            style="font-family: 'Montserrat', sans-serif !important;"
            class="grey--text text--lighten-2 text-body-2 text-decoration-none text-sm-caption text-md-body-2"
            >Terms</router-link
          >
          <router-link
            to="/"
            style="font-family: 'Montserrat', sans-serif !important;"
            class="grey--text text--lighten-2 text-body-2 text-decoration-none text-sm-caption text-md-body-2"
            >Privacy</router-link
          >
          <router-link
            to="/"
            style="font-family: 'Montserrat', sans-serif !important;"
            class="grey--text text--lighten-2 text-body-2 text-decoration-none text-sm-caption text-md-body-2"
            >Cookies</router-link
          >
        </v-col>
        <v-col
          cols="12"
          sm="4"
          lg="4"
          class="d-flex justify-center align-center"
        >
          <v-btn fab small outlined dark color="grey darken-1">
            <v-icon color="white">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn fab small outlined dark color="grey darken-1" class="mx-5">
            <v-icon color="white">mdi-facebook</v-icon>
          </v-btn>
          <v-btn fab small outlined dark color="grey darken-1">
            <v-icon color="white">mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
