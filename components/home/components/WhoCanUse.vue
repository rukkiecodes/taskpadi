<template>
  <div class="whoCanUse">
    <Heading h1="Who can use Trust paddi?" />

    <div class="sectionEven">
      <div class="left">
        <div class="leftImage">
          <img src="../../../assets/trust/home/peer.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="textArea">
          <p class="smallTitle">INDIVIDUALS</p>
          <p class="largeTitle">Peer 2 Peer</p>
          <p class="body">
            Anyone can use TrustPaddi especially when it comes to making
            transactions with unknown online vendors, service providers or with
            people whom you haven't done business with before.
          </p>
          <vs-button size="large" color="#210070">
            Create a transaction
          </vs-button>
        </div>
      </div>
    </div>

    <div class="oddEven">
      <div class="left">
        <div class="textArea">
          <p class="smallTitle">BUSINESSES</p>
          <p class="largeTitle">
            Sellers, service providers, Crypto traders & online vendors
          </p>
          <p class="body">
            Any Business owner can use TrustPaddi, with our escrow services you
            can gain the Trust and Reliability that big brands enjoy, boost your
            sales, avoid the risk associated with cash on delivery (COD), attend
            to as much order as you want and enjoy peace of mind knowing you
            will get paid instantly without stories.
          </p>
          <vs-button size="large" color="#210070">
            Get Started
          </vs-button>
        </div>
      </div>
      <div class="right">
        <div class="leftImage">
          <img src="../../../assets/trust/home/peer.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="sectionEven">
      <div class="left">
        <div class="leftImage">
          <img src="../../../assets/trust/home/e_commerce.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="textArea">
          <p class="smallTitle">E-COMMERCE</p>
          <p class="largeTitle">ONLINE MARKETPLACES/ E-COMMERCE STORES</p>
          <p class="body">
            Potential customers are always skeptical about certain e-commerce
            sites which hasn't been recognised, the best way to gain your
            customers trust is to integrate TrustPaddi with your e-commerce
            website or marketplace.
          </p>
          <vs-button size="large" color="#210070"> Integrate Now </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./Heading.vue";
export default {
  data: () => ({}),

  components: {
    Heading,
  },
};
</script>

<style scoped>
@import url(./assets/whoCanUse.css);
</style>
