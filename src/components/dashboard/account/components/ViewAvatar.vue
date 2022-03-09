<template>
  <v-row justify="center">
    <vs-dialog v-model="account.editAvatarDialog" auto-width not-padding>
      <div class="content">
        <img
          alt=""
          v-if="account.userData.avatar"
          :src="`https://trustpaddi.herokuapp.com/${account.userData.avatar}`"
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
