import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
        path: "/signup",
        name: "Signup",
        component: () =>
            import ("../views/auth/Signup.vue"),
    },
    {
        path: "/",
        name: "Signin",
        component: () =>
            import ("../views/auth/Signin.vue"),
    },
    {
        path: "/forgotPassword",
        name: "ForgotPassword",
        component: () =>
            import ("../views/auth/ForgotPassword.vue"),
    },
    {
        path: "/verifyAccount",
        name: "VerifyAccount",
        component: () =>
            import ("../views/auth/VerifyAccount.vue"),
    },
    {
        path: "/goodAndProductBuyer",
        name: "GoodAndProductBuyer",
        component: () =>
            import ("../views/transactions/GoodAndProductBuyer.vue"),
    },
    {
        path: "/deliveryInfo",
        name: "DeliveryInfo",
        component: () =>
            import ("../views/transactions/DeliveryInfo.vue"),
    },
    {
        path: "/traderCrypto",
        name: "TraderCrypto",
        component: () =>
            import ("../views/transactions/TraderCrypto.vue"),
    },
    {
        path: "/clientServices",
        name: "ClientServices",
        component: () =>
            import ("../views/transactions/ClientServices.vue"),
    },
    {
        path: "/custumerCrypto",
        name: "CustumerCrypto",
        component: () =>
            import ("../views/transactions/CustumerCrypto.vue"),
    },
    {
        path: "/goodAndProductSeller",
        name: "GoodAndProductSeller",
        component: () =>
            import ("../views/transactions/GoodAndProductSeller.vue"),
    },
    {
        path: "/proofOfPayment",
        name: "ProofOfPayment",
        component: () =>
            import ("../views/transactions/ProofOfPayment.vue"),
    },
    {
        path: "/providerServices",
        name: "ProviderServices",
        component: () =>
            import ("../views/transactions/ProviderServices.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import ("../views/dashboard/Dashboard.vue"),
        children: [{
                path: "viewProducts",
                name: "viewProducts",
                component: () =>
                    import ("../components/dashboard/product/viewProduct/ViewProduct.vue"),
            },
            {
                path: "dashboard",
                name: "Your Paddi Dashboard",
                component: () =>
                    import ("../views/dashboard/PaddiDashboard.vue"),
            },
            {
                path: "transactions",
                name: "Transaction",
                component: () =>
                    import ("../views/dashboard/Transactions.vue"),
                children: [{
                        path: "goods",
                        name: "GoodsAndPruducts",
                        component: () =>
                            import (
                                "../components/dashboard/transaction/goodsAndProducts/GoodsAndProducts.vue"
                            ),
                    },
                    {
                        path: "crypto",
                        name: "Crypto",
                        component: () =>
                            import ("../components/dashboard/transaction/crypto/Crypto.vue"),
                    },
                    {
                        path: "services",
                        name: "Services",
                        component: () =>
                            import (
                                "../components/dashboard/transaction/services/Services.vue"
                            ),
                    },

                    {
                        path: ":_id",
                        name: "ViewTransaction",
                        component: () =>
                            import (
                                "../components/dashboard/transaction/viewTransaction/ViewTransaction.vue"
                            ),
                    },
                ],
            },
            {
                path: "product",
                name: "Product",
                component: () =>
                    import ("../views/dashboard/Product.vue"),
            },
            {
                path: "orders",
                name: "Orders",
                component: () =>
                    import ("../views/dashboard/Orders.vue"),
            },
            {
                path: "store",
                name: "Store",
                component: () =>
                    import ("../views/dashboard/Store.vue"),
            },
            {
                path: "withdraws",
                name: "Withdraws",
                component: () =>
                    import ("../views/dashboard/Withdraws.vue"),
            },
            {
                path: "createpaddilink",
                name: "PaddiLink",
                component: () =>
                    import ("../views/dashboard/PaddiLink.vue"),
            },
            {
                path: "paddiPay",
                name: "PaddiPay",
                component: () =>
                    import ("../views/dashboard/PaddiPay.vue"),
            },
            {
                path: "refunds",
                name: "Refunds",
                component: () =>
                    import ("../views/dashboard/Refunds.vue"),
            },
            {
                path: "support",
                name: "CustomerSupport",
                component: () =>
                    import ("../views/dashboard/CustomerSupport.vue"),
                children: [{
                        path: "",
                        name: "AllTickets",
                        component: () =>
                            import (
                                "../components/dashboard/customerSupport/components/AllTickets.vue"
                            ),
                    },
                    {
                        path: ":_id",
                        name: "viewTicket",
                        component: () =>
                            import (
                                "../components/dashboard/customerSupport/components/ViewTicket.vue"
                            ),
                    },
                ],
            },
            {
                path: "account",
                name: "Account",
                component: () =>
                    import ("../views/dashboard/Account.vue"),
            },
            {
                path: "/:catchAll(.*)*",
                name: "Error",
                component: () =>
                    import ("../views/Error404.vue"),
            },
        ],
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router