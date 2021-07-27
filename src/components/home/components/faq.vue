<template>
  <div>
    <div class="wrapper">
      <div class="custom-style">
        <div class="contentBody">
          <p class="content-writing" style="font-size: 20px !important">
            {{ answers[active] }}
          </p>
          <div class="content-wrapper">
            <div class="contact-main-body" v-show="fullHeight">
              <div class="contact-wrapper">
                <form action="">
                  <input class="input" placeholder="ask a question" />
                </form>
                <div class="childBody">
                  <div class="childbtn1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29.296"
                      height="25.324"
                      viewBox="0 0 29.296 25.324"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1" data-name="Layer 1">
                          <g id="camera">
                            <path
                              id="Path_125"
                              data-name="Path 125"
                              d="M24.082,2.979H20.929L19.9.725A1.246,1.246,0,0,0,18.769,0H10.527A1.246,1.246,0,0,0,9.4.725L8.372,2.979H5.214A5.219,5.219,0,0,0,0,8.193V20.11a5.219,5.219,0,0,0,5.214,5.214H24.082A5.219,5.219,0,0,0,29.3,20.11V8.193a5.219,5.219,0,0,0-5.214-5.214ZM14.648,19.365a5.214,5.214,0,1,1,5.214-5.214,5.214,5.214,0,0,1-5.214,5.214Zm0-7.945a2.731,2.731,0,1,0,2.731,2.731,2.731,2.731,0,0,0-2.731-2.731Z"
                              fill="#4169e2"
                              opacity="0.4"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="childbtn2">
                    <svg
                      id="Layer_2"
                      data-name="Layer 2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="29.307"
                      height="29.296"
                      viewBox="0 0 29.307 29.296"
                    >
                      <g
                        id="Layer_1"
                        data-name="Layer 1"
                        transform="translate(0 0)"
                      >
                        <path
                          id="navigation"
                          d="M28.594.69A2.334,2.334,0,0,0,25.953.219l-24.6,11.3a2.349,2.349,0,0,0,.238,4.37l7.543,2.483,3.843-3.838a1.241,1.241,0,0,1,1.753,1.753L10.912,20.15l2.483,7.543a2.334,2.334,0,0,0,2.11,1.6h.129a2.334,2.334,0,0,0,2.13-1.366l11.3-24.6A2.334,2.334,0,0,0,28.594.69Z"
                          transform="translate(0.023 -0.001)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-for="(item, i) in items" :key="i" class="card-body">
            <div class="card-container">
              <div class="card-container-style">
                <v-card
                  class="custom-card"
                  :class="style"
                  outlined
                  @click="toggleIndex(i)"
                  :id="'card-' + i"
                >
                  <v-list-item three-line>
                    <v-list-item-subtitle class="text-center text-color">
                      {{ item }}
                      <div class="icon1" v-if="i !== active">
                        <v-icon right>mdi-chevron-right</v-icon>
                      </div>
                      <div v-else class="icon1">
                        <v-icon right>mdi-chevron-left</v-icon>
                      </div>

                      <div class="icon2" v-if="i !== active">
                        <v-icon right>mdi-chevron-down</v-icon>
                      </div>
                      <div v-else class="icon2">
                        <v-icon>mdi-chevron-up</v-icon>
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-card>

                <div>
                  <p
                    v-if="i == active"
                    class="content-writing-small"
                    style="font-size: 18px !important"
                  >
                    {{ answers[active] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-container>
      <div class="contact-wrapper-small">
        <form action="">
          <input class="input" placeholder="ask a question" />
        </form>
        <div class="childBody">
          <div class="childbtn1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.296"
              height="25.324"
              viewBox="0 0 29.296 25.324"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1" data-name="Layer 1">
                  <g id="camera">
                    <path
                      id="Path_125"
                      data-name="Path 125"
                      d="M24.082,2.979H20.929L19.9.725A1.246,1.246,0,0,0,18.769,0H10.527A1.246,1.246,0,0,0,9.4.725L8.372,2.979H5.214A5.219,5.219,0,0,0,0,8.193V20.11a5.219,5.219,0,0,0,5.214,5.214H24.082A5.219,5.219,0,0,0,29.3,20.11V8.193a5.219,5.219,0,0,0-5.214-5.214ZM14.648,19.365a5.214,5.214,0,1,1,5.214-5.214,5.214,5.214,0,0,1-5.214,5.214Zm0-7.945a2.731,2.731,0,1,0,2.731,2.731,2.731,2.731,0,0,0-2.731-2.731Z"
                      fill="#4169e2"
                      opacity="0.4"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="childbtn2">
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              width="29.307"
              height="29.296"
              viewBox="0 0 29.307 29.296"
            >
              <g id="Layer_1" data-name="Layer 1" transform="translate(0 0)">
                <path
                  id="navigation"
                  d="M28.594.69A2.334,2.334,0,0,0,25.953.219l-24.6,11.3a2.349,2.349,0,0,0,.238,4.37l7.543,2.483,3.843-3.838a1.241,1.241,0,0,1,1.753,1.753L10.912,20.15l2.483,7.543a2.334,2.334,0,0,0,2.11,1.6h.129a2.334,2.334,0,0,0,2.13-1.366l11.3-24.6A2.334,2.334,0,0,0,28.594.69Z"
                  transform="translate(0.023 -0.001)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      activeClass: false,
      style: "",
      active: 0,
      fullHeight: true,

      answers: [
        "TrustPaddi is Nigerians most trusted escrow platform built with the latest technology which enables safer transactions between online sellers & buyers whether online or offline, TrustPaddi has got you covered.",
        "An is a financial agreement in which a third party controls payments between two transacting parties and only releases the funds involved when all of the terms of a given contract are met.",
        "Yes, we act as the middle man/third party for every transaction made through the platform to protect the interest of both parties ",
        "Anyone can create an escrow transaction, it's usually between 2 parties (B2B, B2C or P2P) ",
        "Yes, we partner with tested and trusted logistics partners such as DHL, GIG etc",
        "Yes they are, we select our logistics partners carefully. ",
        "No, but it depends o the buyers decision, if the buyer chooses the seller to handle delivery then we only act as the escrow for the transaction and ensure that both parties are satisfied. ",
        "The escrow transaction can be created from the dashboard after you have logged in or from the homepage.",
        "a. Choose the type of transaction you want to create b. Choose your role in the transaction c. Fill in the questionnaire d. Choose a payment method and pay into escrow ",
        "A Paddi link is a link which a seller generates that enables more than one customer to pay into escrow for a certain product or service. ",
        "You can create or generate a trust link in less than 30 seconds from your dashboard. a. Click on create paddi link within the homepage b. Fill up the details for the trust link and click on create c. Copy the link that appears on your screen (you can also preview the trust link) ",
        "No. As much as we would want the seller to be able to withdraw payments immediately, the buyer is given a 12 hour deadline to raise any complaint or issues about the product (if the need arises). If the buyer hasn't raised any complaints after 12 hours elapses, then the seller can withdraw the money to there account.Yes. But the transaction can only be cancelled two hours after the transaction was created, after hours the buyer can still cancel the transaction but there would be 5% deduction from the money",
        "The seller is immediately notified about the payment and it is expected to make delivery to the buyer within the agreed time frame.The seller is notified through an email or text message and if both efforts to reach the seller proves abortive we give the seller a call.",
        "Immediately we contact the seller to know his/her prefered method of pick up. Either ways we assign one of our logistics partners to handle the pick up. It's either the seller sends the goods to the logistics company or the logistics company goes to pick up the goods from the seller for delivery. ",
        " i Immediately we contact the seller to know his/her prefered method of pick up. Either ways we assign one of our logistics partners to handle the pick up. It's either the seller sends the goods to the logistics company or the logistics company goes to pick up the goods from the seller for delivery.",
        "yes, the money would be deducted from your payment. ",
      ],
      items: [
        "What is TrustPaddi?",
        "what is escrow",
        "Can TrustPaddi be likened to a middle man between the buyer an seller?",
        "Who can create an escrow transaction? ",
        "Does TrustPaddi handle delivery? ",
        "Are your logistics partners efficient? ",
        "  Must I make deliveries through your logistics partners? ",

        "Where can I create an escrow transaction? ",
        "How to create an escrow transaction? ",
        "What is a Paddi link?",
        "How to create a Paddi Link ",
        "After a successful transaction, can the seller withdraw payments immediately?",
        " After creating a transaction, can the transaction be cancelled?",
        "What happens after I make payment for the product or service? ",
        " What if TrustPaddi is selected to make the delivery? ",
        "Is the seller meant to pay for pick up? ",
      ],
    };
  },
  computed: {
    ...mapState(["app_drawer"]),
    ...mapGetters(["drawer_routs"]),
    // drawer: {
    //   get() {
    //     return this.$store.state.drawer;
    //   },
    //   set(new_value) {
    //     this.$store.state.drawer = new_value;
    //   },
    // },
  },
  methods: {
    activeChecker(i) {
      if (this.activeClass) {
        var oldElem = document.querySelector(".activeClass");
        if (oldElem != null) {
          oldElem.classList.remove("activeClass");
        }

        var elem = document.getElementById(`card-${i}`);
        elem.classList.add("activeClass");
      }
    },
    toggleIndex(i) {
      if (this.active == i) {
        i = null;
        this.activeClass = false;
      }
      this.active = i;
      this.activeClass = true;

      this.activeChecker(i);
    },
  },
  mounted() {
    window.addEventListener("scroll", (event) => {
      if (document.documentElement.scrollTop > 1900) {
        this.fullHeight = false;
      } else {
        this.fullHeight = true;
      }
    });
  },
};
</script>

<style>
@import url(".././../../assets/styles/FAQ.css");
</style>
