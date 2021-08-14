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
    path: "/good_and_product_buyer",
    name: "Good and prodict buyer",
    component: () => import("../views/Good_and_prodict_buyer.vue"),
    children: [
      {
        path: "",
        name: "Seller email",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Seller_Email.vue"
          ),
      },
      {
        path: "seller_phone_number",
        name: "Seller phone number",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Sellers_phone_number.vue"
          ),
      },
      {
        path: "product_name",
        name: "Seller phone number",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Product_name.vue"
          ),
      },
      {
        path: "product_price",
        name: "Product price",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Product_price.vue"
          ),
      },
      {
        path: "product_description",
        name: "Product description",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Product_description.vue"
          ),
      },
      {
        path: "condition",
        name: "Product condition",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Condition.vue"
          ),
      },
      {
        path: "handle_delivery",
        name: "Handle delivery",
        component: () =>
          import(
            "../components/good_and_prodict_buyer/components/Handle_delivery.vue"
          ),
      },
    ],
  },
  {
    path: "/delivery_info",
    name: "delivery_info",
    component: () => import("../views/Delivery_info.vue"),
    children: [
      {
        path: "",
        name: "Delivery info product name",
        component: () =>
          import("../components/delivery_info/components/Product_name.vue"),
      },
      {
        path: "product_size",
        name: "Product size",
        component: () =>
          import("../components/delivery_info/components/Product_size.vue"),
      },
      {
        path: "product_image",
        name: "Product image",
        component: () =>
          import("../components/delivery_info/components/Product_image.vue"),
      },
      {
        path: "residential_address",
        name: "Residential address",
        component: () =>
          import(
            "../components/delivery_info/components/Residential_address.vue"
          ),
      },
      {
        path: "state_address",
        name: "State address",
        component: () =>
          import("../components/delivery_info/components/State_address.vue"),
      },
    ],
  },
  {
    path: "/good_and_prodict_seller",
    name: "good and prodict seller",
    component: () => import("../views/Good_and_prodict_seller.vue"),
    children: [
      {
        path: "",
        name: "Buyers email",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_email.vue"
          ),
      },
      {
        path: "buyers_phone",
        name: "Buyers phone",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_phone.vue"
          ),
      },
      {
        path: "transaction_title",
        name: "Buyers transaction title",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Transction_title.vue"
          ),
      },
      {
        path: "buyers_product_description",
        name: "Buyers product description",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_product_description.vue"
          ),
      },
      {
        path: "buyers_agreed_price",
        name: "Buyers agreed price",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Agreed_price.vue"
          ),
      },
      {
        path: "buyers_product_photo",
        name: "Buyers product photo",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_product_photo.vue"
          ),
      },
      {
        path: "buyers_product_condition",
        name: "Buyers product condition",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_product_condition.vue"
          ),
      },
      {
        path: "buyers_product_image",
        name: "Buyers product image",
        component: () =>
          import(
            "../components/good_and_prodict_seller/components/Buyers_product_image.vue"
          ),
      },
    ],
  },
  {
    path: "/custumer_crypto",
    name: "Customer crypto",
    component: () => import("../views/Custumer_crypto.vue"),
    children: [
      {
        path: "",
        name: "Customer email",
        component: () =>
          import("../components/custumer_crypto/components/Customer_email.vue"),
      },
      {
        path: "custumer_phone",
        name: "Customer phone",
        component: () =>
          import("../components/custumer_crypto/components/Customer_phone.vue"),
      },
      {
        path: "custumer_currency",
        name: "Customer currency",
        component: () =>
          import(
            "../components/custumer_crypto/components/Customer_currency.vue"
          ),
      },
      {
        path: "custumer_amount",
        name: "Customer amount",
        component: () =>
          import(
            "../components/custumer_crypto/components/Customer_amount.vue"
          ),
      },
      {
        path: "custumer_price",
        name: "Customer price",
        component: () =>
          import("../components/custumer_crypto/components/Customer_price.vue"),
      },
      {
        path: "custumer_transaction_duration",
        name: "Customer transaction duration",
        component: () =>
          import(
            "../components/custumer_crypto/components/Customer_transaction_duration.vue"
          ),
      },
      {
        path: "custumer_wallet_address",
        name: "Customer wallet address",
        component: () =>
          import(
            "../components/custumer_crypto/components/Customer_wallet_address.vue"
          ),
      },
    ],
  },
  {
    path: "/trader_crypto",
    name: "Trader crypto",
    component: () => import("../views/Trader_crypto.vue"),
    children: [
      {
        path: "",
        name: "Trader email",
        component: () =>
          import("../components/trader_crypto/components/Trader_email.vue"),
      },
      {
        path: "trader_phone",
        name: "Trader phone",
        component: () =>
          import("../components/trader_crypto/components/Trader_phone.vue"),
      },
      {
        path: "trader_currency",
        name: "Trader currency",
        component: () =>
          import("../components/trader_crypto/components/Trader_currency.vue"),
      },
      {
        path: "trader_amount",
        name: "Trader amount",
        component: () =>
          import("../components/trader_crypto/components/Trader_amount.vue"),
      },
      {
        path: "trader_price",
        name: "Trader price",
        component: () =>
          import("../components/trader_crypto/components/Trader_price.vue"),
      },
      {
        path: "Trader_transaction_duration",
        name: "Trader transaction duration",
        component: () =>
          import(
            "../components/trader_crypto/components/Trader_transaction_duration.vue"
          ),
      },
    ],
  },
  {
    path: "/provider_services",
    name: "Provider services",
    component: () => import("../views/Provider_services.vue"),
    children: [
      {
        path: "",
        name: "Provider email",
        component: () =>
          import(
            "../components/provider_services/components/Provider_email.vue"
          ),
      },
      {
        path: "provider_phone",
        name: "Provider phone",
        component: () =>
          import(
            "../components/provider_services/components/Provider_phone.vue"
          ),
      },
      {
        path: "available_services",
        name: "Provider services to render",
        component: () =>
          import(
            "../components/provider_services/components/Provider_services_to_render.vue"
          ),
      },
      {
        path: "provider_transaction_duration",
        name: "Provider transaction duration",
        component: () =>
          import(
            "../components/provider_services/components/Provider_services_duration.vue"
          ),
      },
      {
        path: "provider_amount",
        name: "Provider amount",
        component: () =>
          import(
            "../components/provider_services/components/Provider_amount.vue"
          ),
      },
      {
        path: "provider_when_to_pay",
        name: "Provider when to pay",
        component: () =>
          import(
            "../components/provider_services/components/Provider_when_to_pay.vue"
          ),
      },
      {
        path: "provider_contract_terms",
        name: "Provider contract terms",
        component: () =>
          import(
            "../components/provider_services/components/Provider_contract_terms.vue"
          ),
      },
    ],
  },
  {
    path: "/client_services",
    name: "Client services",
    component: () => import("../views/Client_services.vue"),
    children: [
      {
        path: "",
        name: "Client name",
        component: () =>
          import("../components/client_services/components/Client_name.vue"),
      },
      {
        path: "client_phone",
        name: "Client phone",
        component: () =>
          import("../components/client_services/components/Client_phone.vue"),
      },
      {
        path: "available_services",
        name: "Client services to render",
        component: () =>
          import(
            "../components/client_services/components/Client_services_to_render.vue"
          ),
      },
      {
        path: "client_transaction_duration",
        name: "Client transaction duration",
        component: () =>
          import(
            "../components/client_services/components/Client_services_duration.vue"
          ),
      },
      {
        path: "client_amount",
        name: "Client amount",
        component: () =>
          import("../components/client_services/components/Client_amount.vue"),
      },
      {
        path: "client_when_to_pay",
        name: "Client when to pay",
        component: () =>
          import(
            "../components/client_services/components/Client_when_to_pay.vue"
          ),
      },
      {
        path: "client_contract_terms",
        name: "Client contract terms",
        component: () =>
          import(
            "../components/client_services/components/Client_contract_terms.vue"
          ),
      },
    ],
  },
  {
    path: "/proof_of_payment",
    name: "Proof_of_payment",
    component: () => import("../views/Proof_of_payment .vue"),
    children: [
      {
        path: "",
        name: "Wallet screenshots",
        component: () =>
          import(
            "../components/proof_of_payment/components/Wallet_screenshots.vue"
          ),
      },
      {
        path: "other_proof",
        name: "Other proof",
        component: () =>
          import("../components/proof_of_payment/components/Other_proof.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    children: [
      {
        path: "",
        name: "Onboarding",
        component: () => import("../views/Onboarding.vue"),
      },
      {
        path: "menu",
        name: "Dashboard_menu",
        component: () => import("../views/Dashboard_menu.vue"),
      },
      {
        path: "goods_products",
        name: "Goods_products",
        component: () => import("../views/Goods_products.vue"),
      },
      {
        path: "crypto",
        name: "Crypto",
        component: () => import("../views/Crypto.vue"),
      },
      {
        path: "services",
        name: "Services",
        component: () => import("../views/Services.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "ErrorPage",
    component: () => import("../views/404.vue"),
  },
];

export default routes