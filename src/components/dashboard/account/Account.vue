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
          <v-card flat width="500" class="mx-auto">
            <v-card-text class="text-center mb-3">
              <!-- <vs-avatar
                @click="avatarAction"
                class="mx-auto"
                circle
                size="150"
              >
                <img src="../../../assets/trust/me.jpg" />
              </vs-avatar> -->
              <v-menu
                absolute
                offset-y
                style="max-width: 600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <vs-avatar
                    circle
                    size="150"
                    v-on="on"
                    v-bind="attrs"
                    class="mx-auto"
                  >
                    <img src="../../../assets/trust/me.jpg" />
                  </vs-avatar>
                </template>

                <v-file-input
                  @change="setImage"
                  truncate-length="15"
                  class="mainInput"
                  style="display: none"
                ></v-file-input>

                <v-list dense>
                  <v-list-item @click="avatarAction">
                    <v-list-item-title>View profile image</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="selectImage">
                    <v-list-item-title>Change profile image</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-text>

            <v-row class="mb-3" justify="space-between" align="start">
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="First name"
                  v-model="account.credential.firstname"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="Last name"
                  v-model="account.credential.lastname"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="Phone number"
                  v-model="account.credential.phone_number"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="Country"
                  v-model="account.credential.country"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="State"
                  v-model="account.credential.state"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <vs-input
                  placeholder="Local Govenment"
                  v-model="account.credential.lga"
                />
              </v-col>
            </v-row>

            <v-card-actions>
              <vs-button class="text-capitalize mx-auto" color="#6A0DEB" dark
                >Save</vs-button
              >
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat width="90%" class="mx-auto">
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
                  v-model="account.credential.address"
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
    <ViewAvatar />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data: () => ({}),

  components: {
    ViewAvatar: () => import("./components/ViewAvatar.vue"),
  },

  mounted() {
    this.$nextTick(() => {})
  },

  methods: {
    avatarAction() {
      this.account.editAvatarDialog = true

      setTimeout(() => {
        const input = document.querySelectorAll(".vs-input")

        for (let i = 0; i <= input.length; i++) {
          input[i].style.width = "100%"
        }
      }, 100)
    },

    selectImage() {
      document.querySelector(".mainInput [type='file']").click()
    },

    ...mapActions(["setImage"]),
  },

  computed: {
    ...mapState(["account"]),
  },
}
</script>
