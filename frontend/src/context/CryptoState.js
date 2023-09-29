import React, { useState } from 'react'
import CryptoContext from './CryptoContext'
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT

export default function UserState(props) {

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")

    const FetchPrices = async (stock_options) => {
        const response = await fetch(`http://${host}:${port}/api/cryptocurrency/get-crypto-prices`, {
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
