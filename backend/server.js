// The root folder for backend server

const express = require('express')
const app = express()
const connectToMongo = require("./db")
const cors = require("cors")

require("dotenv").config()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(cors({
    origin: 'https://crypto-cave-frontend-qeioq05pm-aayush-1333.vercel.app'
}))
app.use("/api/cryptocurrency", require("./routes/cryptoCurrencies"))
app.use("/api/users", require("./routes/users"))

// connect to Mongo Atlas Database
connectToMongo()
    .then(() => {
        app.listen(port, () => {
            console.log("Connection successful: Backend server started listening!")
        })
    })
    .catch(() => {
        console.log("Database connection error: Can't connect to database!")
    })
