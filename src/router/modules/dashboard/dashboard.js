export default {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("../../../views/dashboard/Dashboard.vue"),
  children: [
    {
      path: "menu",
      name: "Menu",
      component: () => import("../../../views/dashboard/Menu.vue"),
    },
    {
      path: "transaction",
      name: "Transaction",
      component: () => import("../../../views/dashboard/transactions/Transactions.vue"),
    },
  ],
};
