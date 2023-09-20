import React from 'react'
import CryptoContext from './CryptoContext'

export default function UserState(props) {

    const FetchPrices = async (stock_options) => {
        const response = await fetch("http://localhost:5000/api/cryptocurrency/get-daily-prices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...stock_options })
        })
        const result = await response.json()

        return result
    }

    return (
        <CryptoContext.Provider value={{ FetchPrices }}>
            {props.children}
        </CryptoContext.Provider>
    )
}
