import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Prices from './Prices'

export default function Crypto() {
    return (
        <Routes>
            <Route path='/crypto-stock-prices' element={<Prices />} />
        </Routes>
    )
}
