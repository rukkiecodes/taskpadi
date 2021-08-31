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
      {
        icon: "mdi-store-outline",
        title: "Store",
        route: "/dashboard/store",
      },
      {
        icon: "mdi-cash-register",
        title: "Withdraws",
        route: "/dashboard/withdraws",
      },
      {
        icon: "mdi-cash-refund",
        title: "Refunds",
        route: "/dashboard/refunds",
      },
      {
        icon: "mdi-account-tie-voice-outline",
        title: "Customer support",
        route: "/dashboard/customerSupport",
      },
      {
        icon: "mdi-account-outline",
        title: "Account",
        route: "/dashboard/account",
      },
    ],
  },
  getters: {
    dashboardRoutes: (state) => state.dashboardRoutes,
    tabs: (state) => state.tabs,
  },
};
