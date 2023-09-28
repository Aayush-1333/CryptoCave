import React, { useState } from 'react'
import CryptoContext from './CryptoContext'
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT

export default function UserState(props) {

    const [loading, setLoading] = useState(false)

    const FetchPrices = async (stock_options) => {
        const response = await fetch(`http://${host}:${port}/api/cryptocurrency/get-crypto-prices`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...stock_options })
        })
        setLoading(false)
        if (response.ok) {
            const result = await response.json()
            return result
        } else {
            return ""
        }
    }

    return (
        <CryptoContext.Provider value={{ FetchPrices, loading, setLoading }}>
            {props.children}
        </CryptoContext.Provider>
    )
}
