const express = require('express')
const app = express()
const connectToMongo = require("./db")
require("dotenv").config()
const port = process.env.PORT

app.use(express.json())
app.use("/api/cryptocurrency", require("./routes/transactions"))
app.use("/api/users", require("./routes/users"))

connectToMongo()
    .then(() => {
        app.listen(port, () => {
            console.log("Connection successful: Backend server started listening!")
        })
    })
    .catch(() => {
        console.log("Database connection error: Can't connect to database!")
    })
