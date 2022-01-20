<template>
  <v-container class="account">
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
          <span class="hidden-sm-and-down"> Settings </span>
          <v-icon class="hidden-md-and-up">mdi-account-cog-outline</v-icon>
        </v-tab>

        <v-tab-item>
          <v-card flat width="500" class="mx-auto">
            <v-card-text class="text-center mb-3">
              <v-file-input
                @change="setImage"
                class="mainInput"
                style="display: none"
                accept="image/*"
              />
              <vs-avatar
                v-if="!account.avatar"
                @click="selectImage"
                size="100"
                class="mx-auto"
              >
                <i style="font-size: 3rem" class="las la-user"></i>
              </vs-avatar>
              <v-menu
                v-if="account.avatar"
                absolute
                offset-y
                style="max-width: 600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <vs-avatar
                    circle
                    v-on="on"
                    size="150"
                    v-bind="attrs"
                    class="mx-auto"
                    color="#6E14EC"
                  >
                    <img :src="account.avatar" />
                  </vs-avatar>
                </template>

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
              <v-col cols="12">
                <vs-input
                  icon-after
                  type="password"
                  placeholder="Address"
                  v-model="account.credential.address"
                >
                  <template #icon>
                    <i class="las la-pencil-alt"></i>
                  </template>
                </vs-input>
              </v-col>
            </v-row>

            <v-card-actions>
              <vs-button
                dark
                color="#6A0DEB"
                @click="updateProfile"
                :loading="account.saveLoading"
                class="text-capitalize mx-auto"
                >Save</vs-button
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
    this.$nextTick(() => {
      setTimeout(() => {
        const input = document.querySelectorAll(".account .vs-input")
        if (input)
          for (let i = 0; i <= input.length; i++) {
            input[i].style.width = "100%"
          }
      }, 100)
    })
  },

  methods: {
    avatarAction() {
      this.account.editAvatarDialog = true

      // const input = document.querySelectorAll(".account .vs-input")
      // console.log(input)
      // setTimeout(() => {

      //   // for (let i = 0; i <= input.length; i++) {
      //   //   input[i].style.width = "100%"
      //   // }
      // }, 100)
    },

    selectImage() {
      document.querySelector(".mainInput [type='file']").click()
    },

    ...mapActions(["setImage", "updateProfile"]),
  },

  computed: {
    ...mapState(["account"]),
  },
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
