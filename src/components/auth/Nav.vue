<template>
  <vs-navbar class="nav" center-collapsed :fixed="true">
    <template #left>
      <v-avatar size="40" tile>
        <img src="../../assets/paddi.png" />
      </v-avatar>
      <span class="ml-2 font-weight-bold text-body-2 grey--text text--darken-3">Trustpaddi</span>
    </template>
    <template #right>
      <vs-button color="#6E14EC" to="/signin" flat>Sign In</vs-button>
      <vs-button color="#6E14EC" to="/signup">Sign Up</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {}
</script>

<style scoped>
@import url(./assets/nav.css);
</style>
