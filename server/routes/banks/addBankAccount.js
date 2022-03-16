const router = require("express").Router()
const mongoose = require("mongoose")
const checkAuth = require("../../middleware/checkAuth")

const Bank = require("../../models/Banks")

router.post("/addBank", async (req, res) => {
  const { user, bankId, accountNumber, accountName } = req.body

  try {
    const findBank = await Bank.findOne(
      {
        $and: [{ bankId }, { accountNumber }, { accountName }],
      },
      { user }
    )

    if (findBank) {
      return res.status(200).json({
        findBank,
        success: false,
        message: "Bank details already exists",
      })
    } else {
      const newBank = Bank.create({
        _id: new mongoose.Types.ObjectId(),
        user,
        bankId,
        accountNumber,
        accountName,
      })

      return res.status(201).json({
        message: "Bank added successfully",
        newBank,
        success: true,
      })
    }
  } catch (error) {
    return res.status(401).json({
      error,
    })
  }
})

module.exports = router
