const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/createTicket", async (req, res) => {
  const { user, subject, description, department, file } = req.body
})

module.exports = router
