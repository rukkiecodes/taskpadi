const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Wallet = require("../../models/Wallet")

router.get("/my-wallet/:sellerId", checkAuth, async(req, res) => {
    const sellerId = req.params.sellerId
    try {
      const wallet = await Wallet.findOne({ sellerId: sellerId })
      
      if(!wallet) throw new Error('Seller wallet not found')
      const total = wallet.trustAmount + wallet.withdrawalAmount
      wallet.totalAmount = total
      await wallet.save()
      res.status(200).json({
        message: 'Wallet found',
        wallet
      })
    } catch (error) {
      next(error)
    }
})

module.exports = router