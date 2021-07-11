<template>
  <div>
    <div class="wrapper">
      <div class="custom-style">
        <div class="contentBody">
          <p class="content-writing">{{ answers[active] }}</p>
          <div class="content-wrapper">
            <div class="contact-main-body">
              <div class="contact-wrapper">
                <form action="">
                  <input class="input" placeholder="ask a question" />
                </form>
                <div class="childBody">
                  <div class="childbtn1">
                    <span>e</span>
                  </div>
                  <div class="childbtn2">
                    <span>e</span>
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

                      <v-icon right v-if="i !== active"
                        >mdi-chevron-down</v-icon
                      >
                      <v-icon right v-if="i !== active"
                        >mdi-chevron-right</v-icon
                      ></v-list-item-subtitle
                    >
                  </v-list-item>
                </v-card>

                <div>
                  <p v-if="i == active" class="content-writing-small">
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
            <span></span>
          </div>
          <div class="childbtn2">
            <span>e</span>
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
      console.log(i);
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
      this.active = i;
      this.activeClass = true;

      this.activeChecker(i);
    },
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  margin-top: 100px !important;
}
.custom-style {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
.contentBody {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-body {
  margin-bottom: 40px !important;
}
.custom-card {
  border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 240px;
  height: 102px;
}
.activeClass {
  background-color: rgba(65, 106, 226, 0.1) !important;
  border-radius: 10px !important;
}
.text-color {
  color: #4169e2 !important;
}
.content-writing {
  text-align: left !important;
  font: normal normal normal 14px/30px Montserrat !important;
  letter-spacing: 0.42px;
  color: #150f3f !important;
  opacity: 1;
  position: fixed;
  font-size: 14px !important;
  padding-left: 90px;

  /* margin-left: 40px; */
}
.content-writing-small {
  display: none;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 2360px;
  justify-content: space-between;
}
.contact-wrapper-small {
  display: none;
}
.contact-main-body {
  align-self: flex-end;
}
.contact-wrapper {
  display: flex;
  margin-top: 320px;
  position: fixed;
  left: 55%;
}
.input {
  width: 448px;
  height: 131px;
  border: 1px solid #bebfc5;
  border-radius: 10px;
  align-self: flex-end;
  opacity: 1;
  text-align: left;
  font: normal normal medium 14px/18px Montserrat;
  letter-spacing: 0.56px;
  color: #555555;
  opacity: 0.5;
}
.childBody {
  margin-left: 20px;

  text-align: center;
}
.childbtn1 {
  height: 58px;

  background: #4169e2 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 0.1;
  margin-bottom: 10px;
}
.childbtn2 {
  width: 68px;
  height: 58px;
  background: #4169e2 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}
@media (max-width: 1000px) {
  .wrapper {
    width: 100%;
    margin-top: 100px !important;
  }

  .custom-style {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .card-body {
    margin-bottom: 10px !important;
  }
  .custom-card {
    border-top-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 700px;
    height: 102px;
    margin-left: 30px;
  }
  .content-writing {
    display: none;

    /* margin-left: 40px; */
  }
  .content-writing-small {
    display: block;
    margin-left: 30px;
    font-size: 13px;
    width: 700px;
    border-style: hidden;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    border-top-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-color: #4169e2 !important;
    background-color: rgba(65, 106, 226, 0.1) !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .contact-wrapper {
    display: flex;
    margin-top: 320px;
    left: 0%;
    padding: 10px;
  }
  .content-wrapper {
    display: none;
  }
  .contact-wrapper-small {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;

    width: 100%;
    justify-content: flex-end;
  }
  .input {
    width: 340px;
    height: 131px;
    border: 1px solid #bebfc5;
    border-radius: 10px;

    opacity: 1;
    text-align: left;
    font: normal normal medium 14px/18px Montserrat;
    letter-spacing: 0.56px;
    color: #555555;
    opacity: 0.5;
  }
  .childBody {
    text-align: center;
    margin-left: 10px;
  }
  .childbtn1 {
    height: 51px;
    width: 51px;
    background: #4169e2 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 0.1;
    margin-bottom: 30px;
  }
  .childbtn2 {
    width: 51px;
    height: 51px;
    background: #4169e2 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
  }
  .contact-main-body {
    align-self: center;
  }
  @media (max-width: 600px) {
    .wrapper {
      width: 100%;
      margin-top: 100px !important;
    }

    .custom-style {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .card-body {
      margin-bottom: 10px !important;
    }
    .custom-card {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      width: 320px;
      height: 70px;
    }
    .content-writing {
      display: none;

      /* margin-left: 40px; */
    }
    .content-writing-small {
      display: block;
      font-size: 13px;
      width: 320px;
      border-style: hidden;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-right: 15px;
      padding-left: 15px;
      border-top-left-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-color: #4169e2 !important;
      background-color: rgba(65, 106, 226, 0.1) !important;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .contact-wrapper {
      display: flex;
      margin-top: 320px;
      left: 0%;
      padding: 10px;
    }
    .content-wrapper {
      display: none;
    }
    .card-container-style {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contact-wrapper-small {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 40px;

      width: 100%;
      justify-content: flex-end;
    }
    .input {
      width: 254px;
      height: 131px;
      border: 1px solid #bebfc5;
      border-radius: 10px;

      opacity: 1;
      text-align: left;
      font: normal normal medium 14px/18px Montserrat;
      letter-spacing: 0.56px;
      color: #555555;
      opacity: 0.5;
    }
    .childBody {
      text-align: center;
      margin-left: 10px;
      justify-content: space-between;
    }
    .childbtn1 {
      height: 50px;
      width: 50px;
      background: #4169e2 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 0.1;
    }
    .childbtn2 {
      width: 50px;
      height: 50px;
      background: #4169e2 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 1;
    }
    .contact-main-body {
      align-self: center;
    }
  }
}
</style>
