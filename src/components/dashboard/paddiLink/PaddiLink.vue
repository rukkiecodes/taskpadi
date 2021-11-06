<template>
  <v-container>
    <!-- <NoLink /> -->
    <CreateLink />
    <PaddiLinks />
  </v-container>
</template>

<script>
export default {
  components: {
    NoLink: () => import("./components/NoLink.vue"),
    CreateLink: () => import("./components/CreateLink.vue"),
    PaddiLinks: () => import("./components/PaddiLinks.vue")
  },
}
</script>
