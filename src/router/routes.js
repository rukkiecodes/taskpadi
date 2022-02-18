import dashboard from "./modules/dashboard/dashboard";
import admin from "./modules/admin/admin"
export default [
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/",
    name: "Signin",
    component: () => import("../views/auth/Signin.vue"),
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: () => import("../views/auth/ForgotPassword.vue"),
  },
  {
    path: "/verifyAccount",
    name: "VerifyAccount",
    component: () => import("../views/auth/VerifyAccount.vue"),
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
