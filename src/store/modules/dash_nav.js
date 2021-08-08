export default {
  state: {
    dash_navigation: [
      { title: "Onboarding", icon: "mdi-account", to: "/admin" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
      { title: "Onboarding", icon: "mdi-account", to: "/" },
    ],
  },
  getters: {
    dash_navigation: (state) => state.dash_navigation,
  },
};