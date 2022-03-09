const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../../models/User")

router.post("/signin", (req, res) => {
  // LOGIN USER
  const { email, password } = req.body

  User.findOne({ email })
    .exec()
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              success: false,
              message: "Auth failed",
            })
          }
          if (result) {
            const token = jwt.sign(
              {
                email,
                userId: user._id,
              },
              process.env.SESSION_SECRET,
              {
                expiresIn: "1h",
              }
            )
            return res.status(200).json({
              user,
              token,
              success: true,
              message: "Auth successful",
            })
          }
          return res.status(401).json({
            success: false,
            message: "Auth failed",
          })
        })
      } else {
        return res.status(401).json({
          message: "Auth failed",
        })
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Auth failed",
      })
    })
})

module.exports = router
