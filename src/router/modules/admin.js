export default {
  path: "/admin",
  name: "Admin",
  component: () => import("../../views/admin/Admin.vue"),
  children: [
    {
      path: "",
      name: "Onboarding",
      component: () => import("../../views/admin/Onboarding.vue"),
    },
    {
      path: "menu",
      name: "Dashboard_menu",
      component: () => import("../../views/admin/Dashboard_menu.vue"),
    },
    {
      path: "goods_products",
      name: "Goods_products",
      component: () => import("../../views/admin/Goods_products.vue"),
    },
    {
      path: "crypto",
      name: "Crypto",
      component: () => import("../../views/admin/Crypto.vue"),
    },
    {
      path: "services",
      name: "Services",
      component: () => import("../../views/admin/Services.vue"),
    },
    {
      path: "withdraws",
      name: "Withdraws",
      component: () => import("../../views/admin/Withdraws.vue"),
    },
    {
      path: "refunds",
      name: "Refunds",
      component: () => import("../../views/admin/Refunds.vue"),
    },
    {
      path: "customer_support",
      name: "Customer_support",
      component: () => import("../../views/admin/Customer_support.vue"),
    },
  ],
};