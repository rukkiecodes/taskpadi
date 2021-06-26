<template>
  <v-app-bar
    class="px-15"
  >
    <v-avatar class="logo_avatar">
      <img
        :src="logo"
        :alt="logo"
      >
    </v-avatar>
    <v-spacer />
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/">About Us</router-link>
      <router-link to="/">FAQ</router-link>
      <router-link to="/">Contact us</router-link>
      <router-link to="/">Pricing</router-link>
    </div>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    logo: require("../../assets/paddi.png"),
    items: [
        { title: 'Sign In', to: '/signin' },
        { title: 'Sign Up', to: '/signup' },
      ],
  }),
}
</script>