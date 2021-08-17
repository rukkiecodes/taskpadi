import admin from "./modules/admin"
import good_and_product_buyer from "./modules/good_and_product_buyer";
import delivery_info from "./modules/delivery_info";
import good_and_prodict_seller from "./modules/good_and_prodict_seller";
import custumer_crypto from "./modules/custumer_crypto";
import trader_crypto from "./modules/trader_crypto";
import provider_services from "./modules/provider_services";
import client_services from "./modules/client_services";
import proof_of_payment from "./modules/proof_of_payment";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/signup_seller",
    name: "Signup seller",
    component: () => import("../views/Signup_seller.vue"),
  },
  {
    path: "/signup_buyer",
    name: "Signup buyer",
    component: () => import("../views/Signup_buyer.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/forgot_password",
    name: "Forgot password",
    component: () => import("../views/Forgot_password.vue"),
  },
  {
    path: "/otp",
    name: "Otp",
    component: () => import("../views/Otp.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "*",
    name: "ErrorPage",
    component: () => import("../views/404.vue"),
  },
  good_and_product_buyer,
  delivery_info,
  good_and_prodict_seller,
  custumer_crypto,
  trader_crypto,
  provider_services,
  client_services,
  proof_of_payment,
  admin,
];

export default routes