<template>
  <v-sheet color="#210070">
    <v-container>
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title class="white--text text-center">Company</v-card-title>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Testimonials
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                P2P Transaction
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                FAQs
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Blog
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Careers
              </router-link>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title class="white--text text-center">Support</v-card-title>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Security
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Fee Calculator
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Fraud Prevention
              </router-link>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <router-link
                class="text-decoration-none grey--text text--lighten-2 pa-0 ma-0"
                to="/"
              >
                Report a Bug
              </router-link>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title class="white--text text-center"
              >Reach us</v-card-title
            >
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-title>contact@trustpaddi.com</v-list-item-title>
              </v-list-item>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-cellphone-android</v-icon>
                </v-list-item-icon>
                <v-list-item-title>+2349033275449</v-list-item-title>
              </v-list-item>
            </v-card-text>
            <v-card-text class="pb-0 mb-0">
              <v-list-item dense dark class="ma-0 pa-0">
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Lagos</v-list-item-title>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-card flat color="transparent" class="ma-0 pa-0">
            <v-card-title class="white--text text-center"
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
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider dark class="my-5" />
      <v-row
        class="flex-column-reverse flex-sm-row"
        justify="space-between"
        align="center"
      >
        <v-col class="text-center text-sm-left" cols="12" sm="4" lg="4">
          <span
            class="grey--text text--lighten-2 text-body-2 text-sm-caption text-md-body-2 mt-sm-3"
          >
            © 2021 TrustPaddi. All rights reserved
          </span>
        </v-col>
        <v-col
          class="d-flex justify-space-around align-center"
          cols="12"
          sm="4"
          lg="4"
        >
          <router-link
            to="/"
            class="grey--text text--lighten-2 text-body-2 text-decoration-none text-sm-caption text-md-body-2"
            >Terms</router-link
          >
          <router-link
            to="/"
            class="grey--text text--lighten-2 text-body-2 text-decoration-none text-sm-caption text-md-body-2"
            >Privacy</router-link
          >
          <router-link
            to="/"
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
