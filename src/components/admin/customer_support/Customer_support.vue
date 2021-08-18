<template>
  <v-container>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores
    ut officia doloremque nam doloribus recusandae! Nisi, porro, consequatur
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores
    ut officia doloremque nam doloribus recusandae! Nisi, porro, consequatur
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores
    ut officia doloremque nam doloribus recusandae! Nisi, porro, consequatur
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
    ducimus aspernatur debitis itaque assumenda architecto vero, voluptates
    reprehenderit optio!
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },

  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      // @ts-ignore
      console.log("customer_support route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      // @ts-ignore
      this.dash_nav.active_dash_route = "/admin/customer_support";
    },
  },

  computed: {
    ...mapState(["dash_nav"]),
    dash_nav: {
      get() {
        return this.$store.state.dash_nav;
      },
      set(new_value) {
        this.$store.state.dash_nav = new_value;
      },
    },
  },
};
</script>
