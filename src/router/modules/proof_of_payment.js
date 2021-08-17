export default {
  path: "/proof_of_payment",
  name: "Proof_of_payment",
  component: () => import("../../views/Proof_of_payment .vue"),
  children: [
    {
      path: "",
      name: "Wallet screenshots",
      component: () =>
        import(
          "../../components/proof_of_payment/components/Wallet_screenshots.vue"
        ),
    },
    {
      path: "other_proof",
      name: "Other proof",
      component: () =>
        import("../../components/proof_of_payment/components/Other_proof.vue"),
    },
  ],
};
