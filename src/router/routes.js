import dashboard from "./modules/dashboard/dashboard";
import admin from "./modules/admin/admin"
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
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
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
    component: () => import("../views/transactions/GoodAndProductBuyer.vue"),
  },
  {
    path: "/deliveryInfo",
    name: "DeliveryInfo",
    component: () => import("../views/transactions/DeliveryInfo.vue"),
  },
  {
    path: "/traderCrypto",
    name: "TraderCrypto",
    component: () => import("../views/transactions/TraderCrypto.vue"),
  },
  {
    path: "/clientServices",
    name: "ClientServices",
    component: () => import("../views/transactions/ClientServices.vue"),
  },
  {
    path: "/custumerCrypto",
    name: "CustumerCrypto",
    component: () => import("../views/transactions/CustumerCrypto.vue"),
  },
  {
    path: "/goodAndProductSeller",
    name: "GoodAndProductSeller",
    component: () => import("../views/transactions/GoodAndProductSeller.vue"),
  },
  {
    path: "/proofOfPayment",
    name: "ProofOfPayment",
    component: () => import("../views/transactions/ProofOfPayment.vue"),
  },
  {
    path: "/providerServices",
    name: "ProviderServices",
    component: () => import("../views/transactions/ProviderServices.vue"),
  },
  dashboard,
  admin,
]
