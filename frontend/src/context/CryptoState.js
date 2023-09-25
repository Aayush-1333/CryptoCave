import React, { useState } from 'react'
import CryptoContext from './CryptoContext'

export default function UserState(props) {

    const [loading, setLoading] = useState(false)

    const FetchPrices = async (stock_options) => {
        const response = await fetch("http://localhost:5000/api/cryptocurrency/get-crypto-prices", {
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
