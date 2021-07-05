import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup_seller from "../views/Signup_seller.vue";
import Signup_buyer from "../views/Signup_buyer.vue";
import Signin from "../views/Signin.vue";
import Forgot_password from "../views/Forgot_password.vue";
import Otp from "../views/Otp.vue";
import About from "../views/About.vue";
import Faq from "../views/Faq.vue";
import Good_and_prodict_buyer from "../views/Good_and_prodict_buyer.vue";
import Seller_Email from "../components/good_and_prodict_buyer/components/Seller_Email.vue";
import Seller_phone_number from "../components/good_and_prodict_buyer/components/Sellers_phone_number.vue"
import Product_name from "../components/good_and_prodict_buyer/components/Product_name.vue"
import Agree_price from "../components/good_and_prodict_buyer/components/Agreed_price.vue"
import Product_description from "../components/good_and_prodict_buyer/components/Product_description.vue"
import Condition from "../components/good_and_prodict_buyer/components/Condition.vue"
import Handle_delivery from "../components/good_and_prodict_buyer/components/Handle_delivery.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup_seller",
    name: "signup_seller",
    component: Signup_seller,
  },
  {
    path: "/signup_buyer",
    name: "Signup_buyer",
    component: Signup_buyer,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: Forgot_password,
  },
  {
    path: "/otp",
    name: "Otp",
    component: Otp,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/good_and_product_buyer",
    name: "good_and_prodict_buyer",
    component: Good_and_prodict_buyer,
    children: [
      {
        path: "",
        name: "seller email",
        component: Seller_Email
      },
      {
        path: "seller_phone_number",
        name: "seller phone number",
        component: Seller_phone_number
      },
      {
        path: "product_name",
        name: "seller phone number",
        component: Product_name
      },
      {
        path: "agree_price",
        name: "agree price",
        component: Agree_price
      },
      {
        path: "product_description",
        name: "product description",
        component: Product_description
      },
      {
        path: "condition",
        name: "product condition",
        component: Condition
      },
      {
        path: "handle_delivery",
        name: "handle delivery",
        component: Handle_delivery
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
