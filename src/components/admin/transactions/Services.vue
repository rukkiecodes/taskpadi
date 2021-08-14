<template>
  <v-container>
    <h1 class="text-h1">Services</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est
    tenetur perspiciatis temporibus placeat possimus magni. Nesciunt officia eos
    praesentium consequatur ea! Nemo natus eligendi in omnis maxime eum dicta.
  </v-container>
</template>

<script>
// @ts-nocheck
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.check_dash_active_route();
    this.default_route();
    this.my_logs();
  },
  methods: {
    ...mapActions(["check_dash_active_route"]),
    my_logs() {
      console.log("services route: ", this.dash_nav.active_dash_route);
    },
    default_route() {
      this.dash_nav.active_dash_route = "/admin/services";
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
