const router = require("express").Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = require("../../models/User")

router.post("/signup", async (req, res) => {
  //SUGNUP USER
  const { firstname, lastname, email, password, referral_code } = req.body
  try {
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
          user = User.create(newUser)

          return res.status(201).json({
            message: "Auth successful",
            success: true,
          })
        }
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(401).json({
      message: "Auth failed",
      success: false,
    })
  }
})

module.exports = router
