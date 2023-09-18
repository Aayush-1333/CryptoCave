const express = require('express')
const router = express.Router()
require("dotenv").config()
const Transactions = require("../models/Transactions")
const api_key = process.env.API_KEY

router.get("/get-daily-prices", async (req, res) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=${api_key}`)

    const result = await response.json()

    const dailyData = result['Time Series (Digital Currency Daily)']
    const dateKeys = Object.keys(dailyData)
    // const entryKeys = Object.keys(dailyData[dateKeys[0]])

    let cryptoData = []
    let arr = [];

    for (let i = 0; i < dateKeys.length; i++) {
        arr = []
        let cryptoStockObject = dailyData[dateKeys[i]]
        arr = {
            "date": dateKeys[i],
            "open": cryptoStockObject["1a. open (USD)"],
            "high": cryptoStockObject["2a. high (USD)"],
            "low": cryptoStockObject["3a. low (USD)"],
            "close": cryptoStockObject["4a. close (USD)"],
            "volume": cryptoStockObject["5. volume"],
            "market_cap": cryptoStockObject["6. market cap (USD)"],
        }

        cryptoData.push(arr)
    }

    for (ele of cryptoData) {
        await Transactions.create({ ...ele })
    }

    return res.status(200).json(cryptoData)

})

module.exports = router