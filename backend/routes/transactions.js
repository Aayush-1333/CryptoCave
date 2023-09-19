const express = require('express')
const router = express.Router()
require("dotenv").config()
const Transactions = require("../models/Transactions")
const api_key = process.env.API_KEY


router.post("/get-daily-prices", async (req, res) => {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_${req.body.freq.toUpperCase()}&symbol=${req.body.currency}&market=${req.body.market}&apikey=${api_key}`)

        const result = await response.json()

        const dailyData = result[`Time Series (Digital Currency ${req.body.freq})`]
        const dateKeys = Object.keys(dailyData)
        const objKeys = Object.keys(dailyData[dateKeys[0]])

        let cryptoData = []
        let arr = [];

        for (let i = 0; i < dateKeys.length; i++) {
            arr = []
            let cryptoStockObject = dailyData[dateKeys[i]]
            arr = {
                "date": dateKeys[i],
                "open": cryptoStockObject[objKeys[0]],
                "high": cryptoStockObject[objKeys[2]],
                "low": cryptoStockObject[objKeys[4]],
                "close": cryptoStockObject[objKeys[6]],
                "volume": cryptoStockObject[objKeys[8]],
                "market_cap": cryptoStockObject[objKeys[9]],
            }

            cryptoData.push(arr)
        }

        // for (ele of cryptoData) {
        //     await Transactions.create({ ...ele })
        // }

        return res.status(200).json(cryptoData)
    } catch {
        return res.status(500).send("API Fetch error")
    }
})

module.exports = router
