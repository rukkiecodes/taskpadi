export default {
  state: {
    dash_navigation: [
      { title: "Onboarding", icon: "mdi-account-outline", to: "/admin" },
      { title: "Dashboard Menu", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
      { title: "Onboarding", icon: "mdi-account-outline", to: "/" },
    ],
  },
  getters: {
    dash_navigation: (state) => state.dash_navigation,
  },
};
