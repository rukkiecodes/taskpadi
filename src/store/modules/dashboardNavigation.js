export default {
  state: {
    drawerState: true,
    currentRoute: "/dashboard/menu",
    transactionTabs: null,
    tabs: ["Goods/products", "Crypto", "Services"],
    dashboardRoutes: [
      {
        icon: "mdi-chart-tree",
        title: "Menu",
        route: "/dashboard/menu",
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
    tabs: (state) => state.tabs,
  },
};
