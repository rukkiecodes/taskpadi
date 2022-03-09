const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const User = require("../../models/User")

router.post("/updateProfile", checkAuth, async (req, res) => {
  const { email, firstname, lastname, phone, country, state, lga, address } =
    req.body
  try {
    console.log(req.file)
    let user = await User.updateOne(
      { email },
      { $set: { firstname, lastname, phone, country, state, lga, address } }
    )
    res.status(200).json({
      message: "User found",
      success: true,
      user,
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Auth failed",
      error,
    })
  }
})

module.exports = router
