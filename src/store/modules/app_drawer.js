const state = {
  drawer_routs: [
    { title: "Home", icon: "mdi-view-dashboard", to: "/" },
    { title: "About Us", icon: "mdi-forum", to: "/about" },
    { title: "FAQ", icon: "mdi-forum", to: "/faq" },
    { title: "Contact Us", icon: "mdi-forum", to: "/contact" },
    { title: "Pricing", icon: "mdi-forum", to: "/pricing" },
  ],
};

const getters = {
  drawer_routs: (state) => state.drawer_routs,
};

export default {
  state,
  getters
};
