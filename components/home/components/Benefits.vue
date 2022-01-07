<template>
  <div class="benefits">
    <Heading
      h1="Benefits Trustpaddi!"
      p="The safest & surest way to transact online"
    />

    <div class="sectionEven">
      <div class="left">
        <div class="leftImage">
          <img src="../../../assets/trust/home/seller.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="textArea">
          <p class="largeTitle">For Sellers</p>

          <div class="body">
            <div class="list" v-for="(list, i) in buyerList" :key="i">
              <i class="las la-dot-circle"></i>
              <span v-text="list.text" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sectionOdd">
      <div class="left">
        <div class="leftImage">
          <img src="../../../assets/trust/home/buyer.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="textArea">
          <p class="largeTitle">For Buyers</p>

          <div class="body">
            <div class="list" v-for="(list, i) in sellerList" :key="i">
              <span v-text="list.text" />
              <i class="las la-dot-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sectionEven">
      <div class="left">
        <div class="leftImage">
          <img src="../../../assets/trust/home/marketplace.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="textArea">
          <p class="largeTitle">For marketplace</p>

          <div class="body">
            <div class="list" v-for="(list, i) in marketplace" :key="i">
              <i class="las la-dot-circle"></i>
              <span v-text="list.text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
export default {
  data: () => ({
    buyerList: [
      {
        text: "Gain Customers Trust",
      },
      {
        text: "Increase Sales",
      },
      {
        text: "Sell to customers outside your reach (outside your state)",
      },
      {
        text: "Get Free escrow stores",
      },
      {
        text: "Avoid The risks associated with pay on delivery",
      },
      {
        text: "Attract Serious Customers and repels the unserious ones",
      },
    ],

    sellerList: [
      {
        text: "Safe and secure transactions with unknown vendors",
      },
      {
        text: "We ensure you get exactly what you ordered",
      },
      {
        text: "Guaranteed refund within 24hours of deliver",
      },
      {
        text: "24/7 Customer Support",
      },
      {
        text: "Fast Delivery",
      },
    ],

    marketplace: [
      {
        text: "Gain customer trust as an upcoming e-commerce brand",
      },
      {
        text: "It's secure",
      },
      {
        text: "Well Written Documentation",
      },
      {
        text: "24/7 Customer Support",
      },
    ],
  }),

  components: {
    Heading,
  },
};
</script>

<style scoped>
@import url(./assets/benefits.css);
</style>
