const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/deleteTicket", async (req, res) => {
  const { user, _id } = req.body
  try {
    const tickets = await SupportTicket.deleteOne({
      $and: [{ user }, { _id }],
    })
    res.status(200).json({
      tickets,
      success: true,
      message: "Ticket deleted successfully",
    })
  } catch (error) {
    return res.status(401).json({
      error,
      success: false,
      message: "Error deleting ticket",
    })
  }
})

module.exports = router
