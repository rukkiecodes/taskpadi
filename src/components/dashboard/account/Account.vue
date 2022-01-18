<template>
  <v-container>
    <v-card flat>
      <v-toolbar flat color="white" dark>
        <v-toolbar-title class="grey--text text--darken-3 font-weight-bold"
          >My Account</v-toolbar-title
        >
      </v-toolbar>
      <v-tabs vertical>
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
        >
          <span class="hidden-sm-and-down"> User Profile </span>
          <v-icon class="hidden-md-and-up">mdi-account-outline</v-icon>
        </v-tab>
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
        >
          <span class="hidden-sm-and-down"> Address </span>
          <v-icon class="hidden-md-and-up">mdi-bus-marker</v-icon>
        </v-tab>
        <v-tab
          active-class="font-weight-bold"
          class="text-capitalize text-body-2"
        >
          <span class="hidden-sm-and-down"> Settings </span>
          <v-icon class="hidden-md-and-up">mdi-account-cog-outline</v-icon>
        </v-tab>

        <v-tab-item>
          <v-card
            flat
            width="500"
            class="mx-auto"
            v-for="(accont, i) in profile"
            :key="i"
          >
            <v-card-text class="text-center mb-3">
              <v-avatar size="150" style="cursor: pointer">
                <v-img src="../../../assets/trust/me.jpg" />
              </v-avatar>
            </v-card-text>

            <v-row class="mb-3" justify="space-between" align="start">
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.firstName"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.lastName"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.phoneNumber"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.country"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.state"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  v-model="accont.LGA"
                />
              </v-col>
            </v-row>

            <v-card-actions>
              <v-btn
                class="text-capitalize mx-auto"
                color="deep-purple accent-4"
                depressed
                dark
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            flat
            width="90%"
            class="mx-auto"
            v-for="(accont, i) in profile"
            :key="i"
          >
            <v-row justify="space-between" align="start">
              <v-col cols="12" sm="4">
                <p class="grey--text text--darken-3 font-weight-bold mb-0">
                  Manage Addresses
                </p>
              </v-col>
            </v-row>
            <v-row class="mb-3" justify="space-between" align="start">
              <v-col cols="12" sm="4">
                <v-text-field
                  flat
                  solo
                  hide-details
                  class="rounded-lg"
                  label="Product title"
                  background-color="#EFF0F6"
                  append-icon="mdi-pencil-outline"
                  v-model="accont.address"
                />
              </v-col>
            </v-row>

            <v-card-actions class="pl-0">
              <v-btn
                class="text-capitalize"
                color="deep-purple accent-4"
                depressed
                dark
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <EditProfile />
  </v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
  data: () => ({
    profile: [
      {
        firstName: "Amagboro",
        lastName: "Terry",
        phoneNumber: "+2348071657443",
        country: "Nigeria",
        state: "River State",
        LGA: "Obio-Apkor",
        address:
          "#11 francis close, off Transkalabari road, eagel cement, Iwofe, Port Harcourt",
      },
    ],
  }),

  components: {
    EditProfile: () => import("./components/EditProfile.vue"),
  },

  computed: {
    ...mapState(["account"]),
  },
}
</script>
