<template>
  <v-menu min-width="500" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="hidden-lg-and-up" v-bind="attrs" v-on="on" icon dark>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-list class="py-0">
      <v-list-item
        v-for="(route, index) in routes"
        :key="index"
        :to="route.to"
        active-class="deep-purple accent-4 white--text"
        link
      >
        <v-list-item-title>{{ route.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { title: "Home", to: "/" },
      { title: "About us", to: "/about" },
      { title: "How it works", to: "/howItWorks" },
      { title: "FAQ", to: "/faq" },
      { title: "Contact us", to: "/contactUs" },
    ],
  }),
}
</script>
