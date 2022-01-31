<template>
  <v-card flat width="500" class="mx-auto">
    <v-card-text class="text-center mb-3">
      <v-file-input
        accept="image/*"
        class="mainInput"
        @change="setImage"
        style="display: none"
      />

      <v-menu absolute offset-y style="max-width: 600px">
        <template v-slot:activator="{ on, attrs }">
          <vs-avatar circle v-on="on" size="150" v-bind="attrs" class="mx-auto">
            <img v-if="account.userData.image == ''" src="../../../../assets/trust/pl.png" alt="" />
            <img v-else :src="account.userData.image" />
          </vs-avatar>
        </template>

        <v-list dense class="py-0">
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
          block
          class="mt-5"
          label-placeholder="First name"
          v-model="account.credential.firstname"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          class="mt-5"
          label-placeholder="Last name"
          v-model="account.credential.lastname"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          class="mt-3"
          label-placeholder="Phone number"
          v-model="account.credential.phone_number"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          class="mt-3"
          label-placeholder="Country"
          v-model="account.credential.country"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          class="mt-3"
          label-placeholder="State"
          v-model="account.credential.state"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <vs-input
          block
          class="mt-3"
          label-placeholder="Local Govenment"
          v-model="account.credential.lga"
        />
      </v-col>
      <v-col cols="12">
        <vs-input
          block
          icon-after
          class="mt-3"
          label-placeholder="Address"
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
        class="text-capitalize mx-auto px-10 font-weight-bold"
        >Save</vs-button
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"

export default {
  mounted() {
    this.$nextTick(() => {})
  },

  methods: {
    avatarAction() {
      this.account.editAvatarDialog = true
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
