import React, { useContext, useState } from 'react'
import CryptoContext from '../../context/CryptoContext'

export default function Prices() {

    const [stockOps, setStockOps] = useState({
        "freq": "",
        "currency": "",
        "market": ""
    })
    const { FetchPrices } = useContext(CryptoContext)
    const [stockData, setStockData] = useState("")
    let i = 0

    const SubmitForm = async (e) => {
        e.preventDefault()
        setStockData(await FetchPrices(stockOps))
    }

    const OnChange = (e) => {
        setStockOps({ ...stockOps, [e.target.name]: e.target.value })
    }

    return (
        <div className='p-5 bg-yellow-500 dark:bg-zinc-700'>
            <form onSubmit={SubmitForm} className='container flex flex-col'>
                <label htmlFor="freq">frequency</label>
                <input type="text" name='freq' value={stockOps.freq} onChange={OnChange} />

                <label htmlFor="currency">currency</label>
                <input type="text" name='currency' value={stockOps.currency} onChange={OnChange} />

                <label htmlFor="market">market</label>
                <input type="text" name='market' value={stockOps.market} onChange={OnChange} />
                <br />

                <button className='bg-green-500 hover:bg-green-700' type='submit'>get prices</button>
            </form>

            <div className='my-10'>
                {stockData !== "" ? stockData.map((ele) => {
                    return <div key={i++} className='flex'>
                        <div>
                            <h1>date = {ele.date}</h1>
                            <h1>Open = {ele.open}</h1>
                            <h1>close = {ele.close}</h1>
                            <h1>high = {ele.high}</h1>
                            <h1>low = {ele.low}</h1>
                            <h1>market_cap = {ele.market_cap}</h1>
                            <h1>volume = {ele.volume}</h1>
                            <br />
                        </div>
                        <br />
                    </div>
                }) : "nothing"}
            </div>
        </div>
    )
}
