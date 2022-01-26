<template>
  <v-speed-dial
    v-model="fab"
    direction="bottom"
    :open-on-hover="true"
    :transition="'slide-y-reverse-transition'"
  >
    <template v-slot:activator>
      <vs-button
        v-model="fab"
        class="font-weight-bold"
        color="#616161"
        transparent
      >
        <vs-avatar size="30" class="mr-3">
          <i class="las la-user" v-if="account.userData.avatar == ''"></i>
          <img
            src="../../../../assets/trust/pl.png"
            v-if="account.userData.avatar == ''"
            alt=""
          />
          <img
            :src="
              'https://dev.trustpaddi.com/public/storage/users/avatars/' +
              account.userData.avatar
            "
            v-else
            alt=""
          />
        </vs-avatar>
        {{ account.userData.firstname || "User" }}
      </vs-button>
    </template>

    <v-list
      class="py-0"
      color="transparent"
      flat
      style="margin-right: 200px"
      width="300"
    >
      <vs-card type="4">
        <template #title>
          <h3
            v-text="
              account.userData.firstname + ' ' + account.userData.lastname
            "
          />
        </template>
        <template #img>
          <img
            v-if="account.userData.avatar != ''"
            :src="
              'https://dev.trustpaddi.com/public/storage/users/avatars/' +
              account.userData.avatar
            "
            alt=""
          />
          <img v-else src="../../../../assets/trust/pl.png" alt="" />
        </template>
        <template #text>
          <div class="d-flex flex-column">
            <span v-text="account.userData.email" />
            <span v-text="account.userData.phone_number" />
            <span
              v-text="
                account.userData.country +
                ' / ' +
                account.userData.state +
                ' / ' +
                account.userData.lga
              "
            />
          </div>
        </template>
        <template #interactions>
          <vs-button
            icon
            color="danger"
            class="btn-chat"
            @click="logout.logoutDialog = true"
          >
            <i style="font-size: 1.2rem; transform: scaleX(-1);" class="las la-sign-out-alt"></i>
          </vs-button>

          <vs-button shadow icon class="btn-chat" to="/dashboard/account">
            <i style="font-size: 1.2rem" class="las la-user"></i>
          </vs-button>
        </template>
      </vs-card>
    </v-list>
  </v-speed-dial>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
  data: () => ({
    fab: false,
  }),

  computed: {
    ...mapState(["logout", "account"]),
  },
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

.vs-card__text {
  width: 100%;
}
</style>
