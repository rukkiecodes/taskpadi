export default {
  state: {
    drawerState: true,
    dashboardRoutes: [
      {
        icon: "mdi-chart-tree",
        title: "Menu",
        route: "/dashboard",
      },
      {
        icon: "mdi-bank-outline",
        title: "Transactions",
        route: "/dashboard/transaction",
      },
    ],
  },
  getters: {
    dashboardRoutes: (state) => state.dashboardRoutes,
  },
  mutations: {},
  actions: {},
};
