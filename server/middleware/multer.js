const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    },
})

let limits = {
    fileSize: 1024 * 1024 * 5,
}

let fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
        cb(null, true)
    else cb(null, false)
}

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
    limits,
    fileFilter,
}).single("avatar")

const file = multer({
    storage,
    limits,
    fileFilter,
}).single("file")

const image = multer({
    storage,
    limits,
    fileFilter,
}).single("image")

const pop = multer({
    storage,
    limits,
    fileFilter,
}).single("pop")

module.exports = { avatar, file, image, pop }