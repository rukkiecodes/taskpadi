<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-purple accent-4"
          class="text-capitalize ml-4"
          dark
          text
          depressed
          v-bind="attrs"
          v-on="on"
        >
          Get started
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(route, i) in start" :key="i" :to="route.to" link>
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
      { title: "Sign Up", to: "/signup" },
      { title: "Sign In", to: "/signin" },
    ],
  }),
};
</script>
