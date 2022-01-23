<template>
  <vs-dialog v-model="logout.logoutDialog" not-center width="300px">
    <template #header>
      <h4 class="not-margin">Are you sure you want to logout?</h4>
    </template>

    <div class="con-content">
      <p>Please not that your saved cookies and sessions will be deleted</p>
    </div>

    <template #footer>
      <div class="d-flex justify-end">
        <vs-button
          transparent
          color="#616161"
          @click="logout.logoutDialog = false"
        >
          cancel
        </vs-button>
        <vs-button
          @click="logoutUser"
          :loading="logout.logoutLoading"
          color="danger"
          transparent
        >
          Ok
          <template #animate>
            <i
              style="font-size: 1.3rem; transform: scaleX(-1)"
              class="las la-sign-out-alt"
            ></i>
          </template>
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  methods: {
    ...mapActions(["logoutUser"]),
  },
  computed: {
    ...mapState(["logout"]),
  },
}
</script>
