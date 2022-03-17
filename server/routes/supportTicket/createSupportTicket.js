const router = require("express").Router()
const mongoose = require("mongoose")
const { file } = require(".././../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/createTicket", file, async (req, res) => {
  const { user, subject, description, department } = req.body

  try {
    let ticket = await SupportTicket.create({
      _id: new mongoose.Types.ObjectId(),
      user,
      subject,
      description,
      department,
      file: req.file.path,
    })
    return res.status(201).json({
      message: "Ticket successfully created",
      success: true,
      ticket,
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error creating ticket. Please add an image",
      error,
    })
  }
})

module.exports = router
