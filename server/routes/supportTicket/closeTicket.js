const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/closeTicket", async (req, res) => {
  const { user, _id } = req.body
  try {
    const tickets = await SupportTicket.updateOne(
      { $and: [{ user }, { _id }] },
      { $set: { status: "closed" } }
    ).exec()
    res.status(200).json({
      tickets,
      success: true,
      message: "Ticket closed successfully",
    })
  } catch (error) {
    return res.status(401).json({
      error,
      success: false,
      message: "Error closing ticket",
    })
  }
})

module.exports = router
