export default {
  state: {
    appRoutes: [
      { title: "Home", to: "/" },
      { title: "About us", to: "/about" },
      { title: "How it works", to: "/howItWorks" },
      { title: "FAQ", to: "/faq" },
      { title: "Contact us", to: "/contactUs" },
    ],
    drawer: false
  },
  getters: {
    appRoutes: (state) => state.appRoutes,
  }
};
