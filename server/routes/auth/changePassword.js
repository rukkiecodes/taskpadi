const router = require("express").Router()
const bcrypt = require("bcrypt")
const checkAuth = require("../../middleware/checkAuth")

const User = require("../../models/User")

router.post("/changePassword", checkAuth, async (req, res) => {
  const { email, password } = req.body

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.status(401).json({
        message: "Auth failed",
        success: false,
      })
    } else {
      try {
        let user = await User.updateOne({ email }, { $set: { password: hash } })
        return res.status(200).json({
          message: "Password Update successful",
          success: true,
          user,
        })
      } catch (error) {
        return res.status(401).json({
          message: "Auth failed",
          success: false,
          error,
        })
      }
    }
  })
})

module.exports = router
