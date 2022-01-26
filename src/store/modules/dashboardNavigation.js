export default {
  state: {
    currentRoute: "/dashboard/menu",
    transactionTabs: null,
    dashboardRoutes: [
      {
        icon: "las la-home",
        title: "Dashboard",
        route: "/dashboard/yourPaddiDashboard",
        location: window.location.pathname,
      },
      {
        icon: "las la-exchange-alt",
        title: "Transactions",
        route: "/dashboard/transaction",
        location: window.location.pathname,
      },
      {
        icon: "las la-store-alt",
        title: "Store",
        route: "/dashboard/store",
        location: window.location.pathname,
      },
      {
        icon: "las la-cash-register",
        title: "Withdraws",
        route: "/dashboard/withdraws",
        location: window.location.pathname,
      },
      {
        icon: "las la-link",
        title: "Create paddi link",
        route: "/dashboard/paddiLink",
        location: window.location.pathname,
      },
      {
        icon: "las la-sync",
        title: "Refunds",
        route: "/dashboard/refunds",
        location: window.location.pathname,
      },
      {
        icon: "las la-question-circle",
        title: "Customer support",
        route: "/dashboard/customerSupport",
        location: window.location.pathname,
      },
      {
        icon: "las la-user-alt",
        title: "Account",
        route: "/dashboard/account",
        location: window.location.pathname,
      },
    ],
  },
  getters: {
    dashboardRoutes: (state) => state.dashboardRoutes,
  },
}
