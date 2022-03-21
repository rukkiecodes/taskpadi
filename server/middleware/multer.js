const multer = require("multer")

// const storage =
const avatar = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./avatar")
        },
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString() + file.originalname)
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 4,
    },
    fileFilter: (req, file, cb) => {
        // reject a file
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
            cb(null, true)
        else cb(null, false)
    },
}).single("avatar")

const file = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./ticket")
        },
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString() + file.originalname)
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 4,
    },
    fileFilter: (req, file, cb) => {
        // reject a file
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
            cb(null, true)
        else cb(null, false)
    },
}).single("file")

const image = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./ticket")
        },
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString() + file.originalname)
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 4,
    },
    fileFilter: (req, file, cb) => {
        // reject a file
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
            cb(null, true)
        else cb(null, false)
    },
}).single("image")

module.exports = { avatar, file, image }