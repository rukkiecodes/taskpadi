export default {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("../../../views/dashboard/Dashboard.vue"),
  children: [
    {
      path: "",
      name: "Menu",
      component: () => import("../../../views/dashboard/Menu.vue"),
    },
  ],
};
