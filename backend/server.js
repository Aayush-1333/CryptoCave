const express = require('express')
const app = express()
const connectToMongo = require("./db")
const cors = require("cors")

require("dotenv").config()
const port = process.env.PORT

// Check if the node environment is in "development" or "production" mode 
if (process.env.NODE_ENV === "production") {
    const path = require("path")
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'), (err) => {
            if (err)
                res.status(500).send(err)
        })
    })
}

app.use(express.json())
app.use(cors())
app.use("/api/cryptocurrency", require("./routes/cryptoCurrencies"))
app.use("/api/users", require("./routes/users"))

// 
connectToMongo()
    .then(() => {
        app.listen(port, () => {
            console.log("Connection successful: Backend server started listening!")
        })
    })
    .catch(() => {
        console.log("Database connection error: Can't connect to database!")
    })
