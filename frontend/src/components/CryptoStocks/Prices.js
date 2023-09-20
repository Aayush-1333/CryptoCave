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
        try {
            setStockData(await FetchPrices(stockOps))
        } catch (error) {
            setStockData("")
        }
    }

    const OnChange = (e) => {
        setStockOps({ ...stockOps, [e.target.name]: e.target.value })
    }

    return (
        <div className={`flex flex-col p-5 bg-orange-400 dark:bg-zinc-700 dark:text-white ${stockData === "" ? 'h-screen' : ''}`}>
            <h1 className='text-4xl mb-12'>Check out prices!</h1>
            
            <form onSubmit={SubmitForm} className='container self-center flex flex-col space-y-4'>
                <label htmlFor="freq">Frequency</label>
                <input className='dark:bg-black rounded-xl p-1 mt-2' type="text" name='freq' value={stockOps.freq} onChange={OnChange} />

                <label htmlFor="currency">Currency</label>
                <input className='dark:bg-black rounded-xl p-1 mt-2' type="text" name='currency' value={stockOps.currency} onChange={OnChange} />

                <label htmlFor="market">Market</label>
                <input className='dark:bg-black rounded-xl p-1 mt-2' type="text" name='market' value={stockOps.market} onChange={OnChange} />

                <button className='bg-green-500 hover:bg-green-700 dark:bg-slate-800 dark:hover:bg-slate-900 self-center mt-4 p-2 rounded-xl' type='submit'>get prices</button>
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
                }) : "No Results to show"}
            </div>
        </div>
    )
}
