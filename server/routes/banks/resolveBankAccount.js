const router = require("express").Router()
const mongoose = require("mongoose")
const checkAuth = require("../../middleware/checkAuth")

const Bank = require("../../models/Banks")

router.post("/resolveBank", async (req, res) => {
  const { user, bankId, accountNumber, accountName, resolve } = req.body

  try {
    const bank = await Bank.updateOne(
      {
        $and: [{ bankId }, { accountNumber }, { accountName }, { user }],
      },
      { $set: { resolve } }
    )
    return res.status(200).json({
      message: "Bank resolved",
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
