<template>
  <v-container class="read_more">
    <div class="read_more_section_one">
      <div class="read_more_left_head">
        <p class="text-h6 font-weight-bold">
          Transact Securely with online vendors & marketplaces, gain customers
          trust with TrustPaddi
        </p>
      </div>

      <div class="read_more_cards">
        <div class="read_more_card py-5 px-5 rounded-lg">
          <div class="card_head mt-3 py-2">
            <div class="read_more_card_avatar" color="#EFF0F7">
              <img
                src="../../assets/trust/sad-emoticon-square-face.png"
                alt=""
              />
            </div>
          </div>
          <p class="mt-4 text-body-2 pt-3">
            We know how Devastating it can be losing money to an online
            fraudster, and if not Cash On Delivery, we're sure you won't make
            any purchases.
          </p>
        </div>
        <div class="read_more_card py-5 px-5 rounded-lg">
          <div class="card_head mt-3 py-2">
            <div class="read_more_card_avatar" color="#EFF0F7">
              <img src="../../assets/trust/tap.png" alt="" />
            </div>
          </div>
          <p class="mt-4 text-body-2 pt-3">
            For business owners and service providers, We also know how hard it
            can be getting potential customers to trust the genuineness of your
            upcoming brand online, on the other hand Cash on delivery isn't
            always a convenient option for you.
          </p>
        </div>
        <div class="read_more_card py-5 px-5 rounded-lg">
          <div class="card_head mt-3 py-2">
            <div class="read_more_card_avatar" color="#EFF0F7">
              <img src="../../assets/trust/cooperation.png" alt="" />
            </div>
          </div>
          <p class="mt-4 text-body-2 pt-3">
            Therefore, It all boils down to the issue of "trust" and this is
            what TrustPaddi is all about, bridging the trust gap between
            potential customers, service providers & businesses online while
            protecting there various interest.
          </p>
        </div>
      </div>
    </div>
    <!-- section two -->
    <div class="read_more_section_two">
      <div class="section_two_sides">
        <div class="section_two_left">
          <div class="read_more_left_head">
            <p class="text-h6 font-weight-bold">
              The safest & surest way to transact online
            </p>
          </div>
          <blockquote class="mt-3">
            <p class="text-body-2">
              TrustPaddi is Nigerians most trusted escrow/middleman platform
              built with the latest technology which enables safer transactions
              between online vendors (marketplaces, businesses etc) &
              individuals whether online or offline. Know More
            </p>
            <p class="text-body-2">
              With TrustPaddi Cash on delivery just got better cause we provide
              full escrow protection for both parties and stress-free delivery
              options for online business owners
            </p>
          </blockquote>
        </div>
        <div class="section_two_right">
          <img src="../../assets/trust/undraw_voice_control_ofo1.svg" alt="" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    isMobile: false,
  }),
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style scoped>
@import url(../../assets/styles/read_more.css);
</style>
