export default {
  path: "/admin",
  name: "Admin",
  component: () => import("../../../views/admin/Dashboard.vue"),
  children: [
    {
      path: "dashboard",
      name: "Admin Dashboard",
      component: () => import("../../../views/admin/dashboard/Dashboard.vue"),
    },
  ],
}
