const express = require('express')
const app = express()
const connectToMongo = require("./db")

app.use(express.json())
app.use("/api/cryptocurrency", require("./routes/transactions"))
app.use("/api/users", require("./routes/users"))

connectToMongo()
    .then(() => {
        app.listen(5000, () => {
            console.log("Server started at port 5000")
        })
    })
    .catch(() => {
        console.log("Can't connect to database")
    })
