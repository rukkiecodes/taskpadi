const router = require("express").Router()
const mongoose = require("mongoose")
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/createTicket", upload.single("file"), async(req, res) => {
    const { user, subject, description, department } = req.body

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })
        let ticket = await SupportTicket.create({
            _id: new mongoose.Types.ObjectId(),
            user,
            subject,
            description,
            department,
            file: result.secure_url,
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