export default {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("../../../views/dashboard/Dashboard.vue"),
  children: [
    {
      path: "dashboard",
      name: "Your Paddi Dashboard",
      component: () => import("../../../views/dashboard/PaddiDashboard.vue"),
    },
    {
      path: "transactions",
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
      path: "createpaddilink",
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
      path: "support",
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
