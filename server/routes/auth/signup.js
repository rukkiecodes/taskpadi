const router = require("express").Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = require("../../models/User")
const Wallet = require("../../models/Wallet")

router.post("/signup", async (req, res, next) => {
  //SUGNUP USER
  try {
    const { firstname, lastname, email, password, referral_code } = req.body
    let user = await User.findOne({ email })

    if (user) {
      console.log("User exists")
      return res.status(401).json({
        message: "Auth failed",
        success: false,
      })
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
            success: false,
          })
        } else {
          let newUser = {
            _id: new mongoose.Types.ObjectId(),
            firstname,
            lastname,
            email,
            referral_code,
            password: hash,
          }
          const wallet = new Wallet({
            sellerId: newUser._id,
            totalAmount: 0,
            withdrawalAmount: 0,
            trustAmount: 0
          })
           wallet.save()
          user =  User.create(newUser)

          return res.status(201).json({
            message: "Auth successful",
            success: true,
          })
        }
      })
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
