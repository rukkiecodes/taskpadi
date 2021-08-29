export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue"),
  },
  {
    path: "/signup_seller",
    name: "Signup_seller",
    component: () => import("../views/auth/Signup_seller.vue"),
  },
  {
    path: "/signup_buyer",
    name: "Signup_buyer",
    component: () => import("../views/auth/Signup_buyer.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/auth/Signin.vue"),
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: () => import("../views/auth/ForgotPassword.vue"),
  },
  {
    path: "/goodAndProductBuyer",
    name: "GoodAndProductBuyer",
    component: () =>
      import(
        "../views/transactions/goodAndProductBuyer/GoodAndProductBuyer.vue"
      ),
  },
  {
    path: "/deliveryInfo",
    name: "deliveryInfo",
    component: () =>
      import("../views/transactions/deliveryInfo/DeliveryInfo.vue"),
  },
];
