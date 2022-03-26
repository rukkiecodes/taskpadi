const router = require("express").Router()
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/getTicket", checkAuth, async(req, res) => {
    const { user } = req.body
    try {
        const tickets = await SupportTicket.find({ user })
        if (tickets.length)
            res.status(200).json({
                tickets,
                success: true,
                message: "Fetch tickets successfully",
            })
    } catch (error) {
        return res.status(401).json({
            error,
            success: false,
            message: "Error fetching tickets",
        })
    }
})

module.exports = router