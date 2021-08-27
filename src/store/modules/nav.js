export default {
  state: {
    appRoutes: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "FAQ", to: "/faq" },
      { title: "Contact us", to: "/contactUs" },
      { title: "Pricing", to: "/pricing" },
    ],
    drawer: false
  },
  getters: {
    appRoutes: (state) => state.appRoutes,
  }
};
