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

// Routes
app.use("/auth", [
    require("./routes/auth/signup"),
    require("./routes/auth/signin"),
    require("./routes/auth/avatar"),
    require("./routes/auth/getProfile"),
    require("./routes/auth/updateProfile"),
    require("./routes/auth/changePassword"),
])

app.use("/states", require("./routes/states"))

app.use("/banks", [
    require("./routes/banks/banks"),
    require("./routes/banks/addBankAccount"),
    require("./routes/banks/resolveBankAccount"),
    require("./routes/banks/removeBankAccount"),
    require("./routes/banks/userBanks"),
])

app.use("/ticket", [
    require("./routes/supportTicket/createSupportTicket"),
    require("./routes/supportTicket/getSupportTicket"),
    require("./routes/supportTicket/getSingleTicket"),
    require("./routes/supportTicket/closeTicket"),
    require("./routes/supportTicket/deleteTicket"),
])

app.use("/transaction", [
    require("./routes/transaction/createTransaction"),
    require("./routes/transaction/getTransactions"),
    require("./routes/transaction/getSingleTransaction"),
    require("./routes/transaction/updateTransaction"),
    require("./routes/transaction/approveTransaction"),
    require("./routes/transaction/confirmTransaction"),
    require("./routes/transaction/declineTransaction"),
    require("./routes/transaction/transactionProofOfPayment"),
    require("./routes/transaction/deleteTransaction"),
])

app.use("/product", [
    require("./routes/product/createProduct"),
    require("./routes/product/getProducts"),
    require("./routes/product/getSingleProduct"),
    require("./routes/product/updateProduct"),
])

const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)