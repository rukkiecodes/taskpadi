const router = require("express").Router()
let crypto = require('crypto');

const Order = require('../../models/Order')
const Transaction = require('../../models/Transaction')
const Wallet = require('../../models/Wallet')

let secret = process.env.PAYSTACK_SECRET_KEY;

// Using Express

router.post("/webhook", async (req, res, next) => {

    try {
      //validate event

    let hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

    if (hash == req.headers['x-paystack-signature']) {

      // Retrieve the request's body

      const response = req.body;

      if(response.event === 'charge.success') {
        const sellerId = response.data.metadata.sellerId
        
        if (response.data.metadata.paymentForm === 'Order') {
          const reference = response.data.reference
          const order = await Order.findOne({ reference: reference })
          order.status = response.data.status
          await order.save()
          const sellerWallet = await Wallet.findOne({ sellerId: sellerId })
          sellerWallet.trustAmount += order.price
          await sellerWallet.save()
          return
        }
        const reference = response.data.reference
        const tx = await Transaction.findOne({ reference: reference })
        tx.status = response.data.status
        await tx.save()
        const sellerWallet = await Wallet.findOne({ sellerId: sellerId })
        sellerWallet.trustAmount += order.price
        await sellerWallet.save()
        return
      }
      // Do something with event
      console.log(response)

    }

      res.send(200);
    } catch (error) {
      console.log(error)
      next(error)
    }

});

module.exports = router