const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Bank = require("../../models/Banks")

router.post("/userBanks", async (req, res) => {
  const { user, bankId } = req.body

  try {
    const bank = await Bank.find({ user })

    if (bank.length)
      return res.status(200).json({
        message: "Banks fetched successfully",
        success: true,
        bank,
      })
    else
      return res.status(200).json({
        message: "Ooops!! No banks here.",
        success: false,
        bank,
      })
  } catch (error) {
    return res.status(401).json({
      error,
    })
  }
})

module.exports = router
