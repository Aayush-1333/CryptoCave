const express = require('express')
const router = express.Router()
require("dotenv").config()
const api_key = process.env.API_KEY


router.post("/get-crypto-prices", async (req, res) => {
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
                "date": new Date(dateKeys[i]),
                "open": Number(cryptoStockObject[objKeys[0]]),
                "high": Number(cryptoStockObject[objKeys[2]]),
                "low": Number(cryptoStockObject[objKeys[4]]),
                "close": Number(cryptoStockObject[objKeys[6]]),
                "volume": Number(cryptoStockObject[objKeys[8]]),
                "market_cap": Number(cryptoStockObject[objKeys[9]]),
            }

            cryptoData.push(arr)
        }


        await fetch("https://api.powerbi.com/beta/8b178bc9-159c-4211-9747-f0ae84fa3369/datasets/0d46891e-9939-4c8b-8f9a-df68ea8b68ed/rows?experience=power-bi&key=Wgf5C4ujdZyaMsqdGxIWuiFtbMOFFIljcDc0k4NIzjoGsoJ3PnVM7sWn4JzijxAHgB%2BX%2FzX1mQX%2B21gEIX2t8A%3D%3D", {
            method: "POST",
            body: JSON.stringify(cryptoData)
        })

        return res.status(200).json(cryptoData)

    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router
