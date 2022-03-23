const router = require("express").Router()
const fs = require("fs")
const checkAuth = require("../../middleware/checkAuth")

const SupportTicket = require("../../models/SupportTicket")

router.post("/deleteTicket", async(req, res) => {
    const { user, _id } = req.body

    const deletedTicket = () => {
        SupportTicket.deleteOne({
                $and: [{ user }, { _id }],
            })
            .exec()
            .then((tickets) => {
                return res.status(200).json({
                    tickets,
                    success: true,
                    message: "Ticket deleted successfully",
                })
            })
            .catch((error) => {
                return res.status(401).json({
                    error,
                    success: false,
                    message: "Error deleting ticket",
                })
            })
    }

    SupportTicket.findOne({ $and: [{ user }, { _id }] }).then((image) => {
        let ticketFile
        if (image.file) ticketFile = `./${image.file}`

        try {
            if (ticketFile) fs.unlinkSync(ticketFile)
            deletedTicket()
        } catch (err) {
            deletedTicket()
        }
    })
})

module.exports = router