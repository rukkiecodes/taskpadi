<template>
  <v-row justify="center">
    <vs-dialog v-model="account.editAvatarDialog" auto-width not-padding>
      <div class="content">
        <img
          v-if="account.userData.avatar != ''"
          :src="
            'https://dev.trustpaddi.com/public/storage/users/avatars/' +
            account.userData.avatar
          "
          alt=""
        />
        <img v-else src="../../../../assets/trust/pl.png" alt="" />
      </div>
    </vs-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["account"]),
  },
}
</script>

<style scoped>
.content {
  border-radius: inherit;
}
.content img {
  display: block;
  position: relative;
  border-radius: inherit;
  max-width: 350px;
}
</style>
