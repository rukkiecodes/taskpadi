<template>
  <v-list-group
    no-action
    prepend-icon="mdi-account-outline"
    color="white"
  >
    <template v-slot:activator>
      <v-list-item-title class="white--text">Account</v-list-item-title>
    </template>
    <v-list-item color="white" link>
      <v-list-item-title>My profile</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item color="white" link>
      <v-list-item-title>Change password</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-account-lock-outline</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item color="white" link>
      <v-list-item-title>Upgrade Account</v-list-item-title>
      <v-list-item-icon>
        <v-icon>mdi-account-convert</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-group>
</template>

<script>
export default {};
</script>

<style></style>
