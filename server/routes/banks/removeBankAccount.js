const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const Bank = require("../../models/Banks")

router.post("/removeBank", async (req, res) => {
  const { bankId } = req.body

  try {
    const bank = await Bank.deleteOne({
      _id: bankId,
    })
    return res.status(200).json({
      message: "Bank removed",
      success: true,
      bank,
    })
  } catch (error) {
    return res.status(401).json({
      error,
    })
  }
})

module.exports = router
