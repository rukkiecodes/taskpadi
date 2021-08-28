export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue")
  }
];