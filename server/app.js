const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const connectDB = require("./config/db")

const app = express()

// Load config
dotenv.config({ path: "./config/config.env" })

connectDB()

app.use(cors())

app.use(
  bodyParser.urlencoded({
    true: false,
    limit: "50mb",
    extended: true,
  })
)

app.use(bodyParser.json({ limit: "50mb" }))

if (process.env.NODE_ENV === "development") app.use(morgan("dev"))

app.use("/uploads", express.static("uploads"))

// Routes
app.use("/auth", [
  require("./routes/auth/signup"),
  require("./routes/auth/signin"),
  require("./routes/auth/avatar"),
  require("./routes/auth/getProfile"),
])

const PORT = process.env.PORT || 3000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)
