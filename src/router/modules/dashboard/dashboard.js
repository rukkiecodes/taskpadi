export default {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("../../../views/dashboard/Dashboard.vue"),
  children: [
    {
      path: "dash",
      name: "Dash",
      component: () => import("../../../views/dashboard/DashboardMenu.vue"),
    },
    {
      path: "transaction",
      name: "Transaction",
      component: () =>
        import("../../../views/dashboard/transactions/Transactions.vue"),
    },
    {
      path: "store",
      name: "Store",
      component: () => import("../../../views/dashboard/Store.vue"),
    },
    {
      path: "withdraws",
      name: "Withdraws",
      component: () => import("../../../views/dashboard/Withdraws.vue"),
    },
    {
      path: "paddiLink",
      name: "PaddiLink",
      component: () => import("../../../views/dashboard/PaddiLink.vue"),
    },
    {
      path: "paddiPay",
      name: "PaddiPay",
      component: () => import("../../../views/dashboard/PaddiPay.vue"),
    },
    {
      path: "refunds",
      name: "Refunds",
      component: () => import("../../../views/dashboard/Refunds.vue"),
    },
    {
      path: "customerSupport",
      name: "CustomerSupport",
      component: () => import("../../../views/dashboard/CustomerSupport.vue"),
    },
    {
      path: "account",
      name: "Account",
      // @ts-ignore
      component: () => import("../../../views/dashboard/account/Account.vue"),
    },
  ],
}
