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
import Seller_phone_number from "../components/good_and_prodict_buyer/components/Sellers_phone_number.vue";
import Product_name from "../components/good_and_prodict_buyer/components/Product_name.vue";
import Product_price from "../components/good_and_prodict_buyer/components/Product_price.vue";
import Product_description from "../components/good_and_prodict_buyer/components/Product_description.vue";
import Condition from "../components/good_and_prodict_buyer/components/Condition.vue";
import Handle_delivery from "../components/good_and_prodict_buyer/components/Handle_delivery.vue";
import Delivery_info from "../views/Delivery_info.vue";
import Delivery_info_product_name from "../components/delivery_info/components/Product_name.vue";
import Product_size from "../components/delivery_info/components/Product_size.vue";
import Product_image from "../components/delivery_info/components/Product_image.vue";
import Residential_address from "../components/delivery_info/components/Residential_address.vue";
import State_address from "../components/delivery_info/components/State_address.vue";
import Good_and_prodict_seller from "../views/Good_and_prodict_seller.vue";
import Buyers_email from "../components/good_and_prodict_seller/components/Buyers_email.vue";
import Buyers_phone from "../components/good_and_prodict_seller/components/Buyers_phone.vue";
import Buyers_transaction_title from "../components/good_and_prodict_seller/components/Transction_title.vue";
import Buyers_product_description from "../components/good_and_prodict_seller/components/Buyers_product_description.vue";
import Buyers_agreed_price from "../components/good_and_prodict_seller/components/Agreed_price.vue";
import Buyers_product_photo from "../components/good_and_prodict_seller/components/Buyers_product_photo.vue";
import Buyers_product_condition from "../components/good_and_prodict_seller/components/Buyers_product_condition.vue";
import Buyers_product_image from "../components/good_and_prodict_seller/components/Buyers_product_image.vue";
import custumer_crypto from "../views/Custumer_crypto.vue";
import Customer_email from "../components/custumer_crypto/components/Customer_email.vue";
import Customer_phone from "../components/custumer_crypto/components/Customer_phone.vue";
import Customer_currency from "../components/custumer_crypto/components/Customer_currency.vue";
import Customer_amount from "../components/custumer_crypto/components/Customer_amount.vue";
import Customer_price from "../components/custumer_crypto/components/Customer_price.vue";
import Customer_transaction_duration from "../components/custumer_crypto/components/Customer_transaction_duration.vue";
import Customer_wallet_address from "../components/custumer_crypto/components/Customer_wallet_address.vue";
import Trader_crypto from "../views/Trader_crypto.vue";
import Trader_email from "../components/trader_crypto/components/Trader_email.vue";
import Trader_phone from "../components/trader_crypto/components/Trader_phone.vue";
import Trader_currency from "../components/trader_crypto/components/Trader_currency.vue";
import Trader_amount from "../components/trader_crypto/components/Trader_amount.vue";
import Trader_price from "../components/trader_crypto/components/Trader_price.vue";
import Trader_transaction_duration from "../components/trader_crypto/components/Trader_transaction_duration.vue";
import Provider_services from "../views/Provider_services.vue";
import Provider_email from "../components/provider_services/components/Provider_email.vue";
import Provider_phone from "../components/provider_services/components/Provider_phone.vue";
import Provider_services_to_render from "../components/provider_services/components/Provider_services_to_render.vue";
import Provider_services_duration from "../components/provider_services/components/Provider_services_duration.vue";
import Provider_amount from "../components/provider_services/components/Provider_amount.vue";
import Provider_when_to_pay from "../components/provider_services/components/Provider_when_to_pay.vue";
import Provider_contract_terms from "../components/provider_services/components/Provider_contract_terms.vue";
import Client_services from "../views/Client_services.vue";
import Client_name from "../components/client_services/components/Client_name.vue";
import Client_phone from "../components/client_services/components/Client_phone.vue";
import Client_services_to_render from "../components/client_services/components/Client_services_to_render.vue";
import Client_services_duration from "../components/client_services/components/Client_services_duration.vue";
import Client_amount from "../components/client_services/components/Client_amount.vue";
import Client_when_to_pay from "../components/client_services/components/Client_when_to_pay.vue";
import Client_contract_terms from "../components/client_services/components/Client_contract_terms.vue";
import Proof_of_payment from "../views/Proof_of_payment .vue";
import Wallet_screenshots from "../components/proof_of_payment/components/Wallet_screenshots.vue";
import Other_proof from "../components/proof_of_payment/components/Other_proof.vue";
import ErrorPage from "../views/404.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup_seller",
    name: "Signup seller",
    component: Signup_seller,
  },
  {
    path: "/signup_buyer",
    name: "Signup buyer",
    component: Signup_buyer,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/forgot_password",
    name: "Forgot password",
    component: Forgot_password,
  },
  {
    path: "/otp",
    name: "Otp",
    component: Otp,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/good_and_product_buyer",
    name: "Good and prodict buyer",
    component: Good_and_prodict_buyer,
    children: [
      {
        path: "",
        name: "Seller email",
        component: Seller_Email,
      },
      {
        path: "seller_phone_number",
        name: "Seller phone number",
        component: Seller_phone_number,
      },
      {
        path: "product_name",
        name: "Seller phone number",
        component: Product_name,
      },
      {
        path: "product_price",
        name: "Product price",
        component: Product_price,
      },
      {
        path: "product_description",
        name: "Product description",
        component: Product_description,
      },
      {
        path: "condition",
        name: "Product condition",
        component: Condition,
      },
      {
        path: "handle_delivery",
        name: "Handle delivery",
        component: Handle_delivery,
      },
    ],
  },
  {
    path: "/delivery_info",
    name: "delivery_info",
    component: Delivery_info,
    children: [
      {
        path: "",
        name: "Delivery info product name",
        component: Delivery_info_product_name,
      },
      {
        path: "product_size",
        name: "Product size",
        component: Product_size,
      },
      {
        path: "product_image",
        name: "Product image",
        component: Product_image,
      },
      {
        path: "residential_address",
        name: "Residential address",
        component: Residential_address,
      },
      {
        path: "state_address",
        name: "State address",
        component: State_address,
      },
    ],
  },
  {
    path: "/good_and_prodict_seller",
    name: "good and prodict seller",
    component: Good_and_prodict_seller,
    children: [
      {
        path: "",
        name: "Buyers email",
        component: Buyers_email,
      },
      {
        path: "buyers_phone",
        name: "Buyers phone",
        component: Buyers_phone,
      },
      {
        path: "transaction_title",
        name: "Buyers transaction title",
        component: Buyers_transaction_title,
      },
      {
        path: "buyers_product_description",
        name: "Buyers product description",
        component: Buyers_product_description,
      },
      {
        path: "buyers_agreed_price",
        name: "Buyers agreed price",
        component: Buyers_agreed_price,
      },
      {
        path: "buyers_product_photo",
        name: "Buyers product photo",
        component: Buyers_product_photo,
      },
      {
        path: "buyers_product_condition",
        name: "Buyers product condition",
        component: Buyers_product_condition,
      },
      {
        path: "buyers_product_image",
        name: "Buyers product image",
        component: Buyers_product_image,
      },
    ],
  },
  {
    path: "/custumer_crypto",
    name: "Customer crypto",
    component: custumer_crypto,
    children: [
      {
        path: "",
        name: "Customer email",
        component: Customer_email,
      },
      {
        path: "custumer_phone",
        name: "Customer phone",
        component: Customer_phone,
      },
      {
        path: "custumer_currency",
        name: "Customer currency",
        component: Customer_currency,
      },
      {
        path: "custumer_amount",
        name: "Customer amount",
        component: Customer_amount,
      },
      {
        path: "custumer_price",
        name: "Customer price",
        component: Customer_price,
      },
      {
        path: "custumer_transaction_duration",
        name: "Customer transaction duration",
        component: Customer_transaction_duration,
      },
      {
        path: "custumer_wallet_address",
        name: "Customer wallet address",
        component: Customer_wallet_address,
      },
    ],
  },
  {
    path: "/trader_crypto",
    name: "Trader crypto",
    component: Trader_crypto,
    children: [
      {
        path: "",
        name: "Trader email",
        component: Trader_email,
      },
      {
        path: "trader_phone",
        name: "Trader phone",
        component: Trader_phone,
      },
      {
        path: "trader_currency",
        name: "Trader currency",
        component: Trader_currency,
      },
      {
        path: "trader_amount",
        name: "Trader amount",
        component: Trader_amount,
      },
      {
        path: "trader_price",
        name: "Trader price",
        component: Trader_price,
      },
      {
        path: "Trader_transaction_duration",
        name: "Trader transaction duration",
        component: Trader_transaction_duration,
      },
    ],
  },
  {
    path: "/provider_services",
    name: "Provider services",
    component: Provider_services,
    children: [
      {
        path: "",
        name: "Provider email",
        component: Provider_email,
      },
      {
        path: "provider_phone",
        name: "Provider phone",
        component: Provider_phone,
      },
      {
        path: "available_services",
        name: "Provider services to render",
        component: Provider_services_to_render,
      },
      {
        path: "provider_transaction_duration",
        name: "Provider transaction duration",
        component: Provider_services_duration,
      },
      {
        path: "provider_amount",
        name: "Provider amount",
        component: Provider_amount,
      },
      {
        path: "provider_when_to_pay",
        name: "Provider when to pay",
        component: Provider_when_to_pay,
      },
      {
        path: "provider_contract_terms",
        name: "Provider contract terms",
        component: Provider_contract_terms,
      },
    ],
  },
  {
    path: "/client_services",
    name: "Client services",
    component: Client_services,
    children: [
      {
        path: "",
        name: "Client name",
        component: Client_name,
      },
      {
        path: "client_phone",
        name: "Client phone",
        component: Client_phone,
      },
      {
        path: "available_services",
        name: "Client services to render",
        component: Client_services_to_render,
      },
      {
        path: "client_transaction_duration",
        name: "Client transaction duration",
        component: Client_services_duration,
      },
      {
        path: "client_amount",
        name: "Client amount",
        component: Client_amount,
      },
      {
        path: "client_when_to_pay",
        name: "Client when to pay",
        component: Client_when_to_pay,
      },
      {
        path: "client_contract_terms",
        name: "Client contract terms",
        component: Client_contract_terms,
      },
    ],
  },
  {
    path: "/proof_of_payment",
    name: "Proof_of_payment",
    component: Proof_of_payment,
    children: [
      {
        path: "",
        name: "Wallet screenshots",
        component: Wallet_screenshots,
      },
      {
        path: "other_proof",
        name: "Other proof",
        component: Other_proof,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
