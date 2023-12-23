import React, { useState } from 'react'
import CryptoContext from './CryptoContext'
const api_url = process.env.REACT_APP_API_URL


export default function UserState(props) {

    // ======== State variables ========
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")


    /**
     * Calls the API for fetching the stock prices based on user options
     * @param {*} stock_options Object
     * @returns Promise
     */
    const FetchPrices = async (stock_options) => {
        const response = await fetch(`${api_url}/api/cryptocurrency/get-crypto-prices`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...stock_options })
        })
        if (response.ok) {
            const result = await response.json()
            return result
        } else {
            setResult("Internal Server Error")
            setLoading(false)
            return ""
        }
    }

    return (
        <CryptoContext.Provider value={{ FetchPrices, loading, setLoading, result, setResult }}>
            {props.children}
        </CryptoContext.Provider>
    )
}
