<template>
  <v-container>
    <v-card v-for="(accont, i) in profile" :key="i" class="mx-auto" width="500">
      <v-card-text class="text-center">
        <v-avatar size="150">
          <v-img src="../../../assets/trust/me.jpg" />
        </v-avatar>
      </v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">First Name</span>{{ accont.firstName }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">Last Name</span>{{ accont.lastName }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">Phone Number</span>{{ accont.phoneNumber }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">Country</span>{{ accont.country }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">State</span>{{ accont.state }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">Logal Government Area</span>{{ accont.LGA }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content><span class="text-caption text-capitalize">Home address</span>{{ accont.address }}</v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer />
        <EditProfile />
        <v-btn @click="account.editAccountDialog = true" class="text-capitalize" color="deep-purple accent-4" depressed dark>Edit profile</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

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
        address: "#11 francis close, off Transkalabari road, eagel cement, Iwofe, Port Harcourt",
      },
    ],
  }),

  components: {
    EditProfile: () => import("./components/EditProfile.vue")
  },

  computed: {
    ...mapState(["account"])
  }
}
</script>
