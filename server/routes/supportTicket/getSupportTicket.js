const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/getTicket", async (req, res) => {
  const { user } = req.body
  try {
    const ticket = await SupportTicket.find({ user })
    res.status(200).json({
      ticket,
      success: true,
      message: "Fetch tickets successfully",
    })
    // if (ticket) {
    // }
  } catch (error) {
    return res.status(401).json({
      error,
      success: false,
      message: "Error creating ticket. Please add an image",
    })
  }
})

module.exports = router
