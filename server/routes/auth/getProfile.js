const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const User = require("../../models/User")

router.get("/profile/:email", checkAuth, async (req, res) => {
  const email = req.params.email
  try {
    console.log(req.file)
    let user = await User.findOne({ email })
    console.log(user)
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
