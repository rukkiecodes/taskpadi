<template>
  <div class="text-center">
    <v-menu transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-on="on"
          v-bind="attrs"
          color="deep-purple accent-4"
          class="text-capitalize ml-4 rounded-pill"
          dark
          depressed
        >
          Get started
        </v-btn>
      </template>
      <v-list class="py-0" width="200" dense>
        <v-list-item v-for="(route, i) in start" :key="i" :to="route.to" link>
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    start: [
      { title: "Sign Up", icon: "mdi-location-enter", to: "/signup" },
      { title: "Sign In", icon: "mdi-login-variant", to: "/signin" },
    ],
  }),
}
</script>
