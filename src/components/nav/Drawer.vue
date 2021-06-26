<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list dense>
      <v-list-item
        v-for="item in drawer_routs"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data: () => ({
    
  }),
  computed: {
    ...mapState(["drawer"]),
    ...mapGetters(['drawer_routs']),
    drawer: {
      get () {
        return this.$store.state.drawer;
      },
      set (new_value) {
        this.$store.state.drawer = new_value;
      },
    },
  }
}
</script>