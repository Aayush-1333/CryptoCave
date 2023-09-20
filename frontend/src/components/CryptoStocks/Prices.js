import React, { useContext, useState } from 'react'
import CryptoContext from '../../context/CryptoContext'
import Spinner from '../Spinner'

export default function Prices() {

    const [stockOps, setStockOps] = useState({
        "freq": "Daily",
        "currency": "BTC",
        "market": "USD"
    })
    const { FetchPrices, loading, setLoading } = useContext(CryptoContext)
    const [stockData, setStockData] = useState("")
    let i = 0
    
    const SubmitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
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
        <div className={`flex flex-col p-5 bg-gradient-to-br from-green-500 to-green-800 dark:from-zinc-700 dark:to-zinc-950 dark:text-white ${stockData === "" ? 'h-screen' : ''}`}>
            <h1 className='text-4xl mb-12'>Check out prices!</h1>
            <div className='self-center bg-gray-400 dark:bg-zinc-900 px-36 py-5 rounded-xl'>
                <form onSubmit={SubmitForm} className='flex flex-col space-y-4'>
                    <label htmlFor="freq">Frequency</label>
                    <select name="freq" className='dark:bg-black rounded-xl p-1 mt-2' value={stockOps.freq} onChange={OnChange}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>

                    <label htmlFor="currency">Currency</label>
                    <select name="currency" className='dark:bg-black rounded-xl p-1 mt-2' value={stockOps.currency} onChange={OnChange}>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="BTT">BTT</option>
                    </select>

                    <label htmlFor="market">Market</label>
                    <select name="market" className='dark:bg-black rounded-xl p-1 mt-2' value={stockOps.market} onChange={OnChange}>
                        <option value="USD">United States Dollar (USD)</option>
                        <option value="JPY">Japanese Yen (JPY)</option>
                        <option value="CNY">Chinese Yuan (CNY)</option>
                        <option value="RUB">Russian Ruble (RUB)</option>
                        <option value="INR">Indian Rupee (INR)</option>
                    </select>

                    <button className='bg-orange-500 hover:bg-orange-700 dark:bg-slate-800 dark:hover:bg-slate-900 self-center mt-4 p-2 rounded-xl' type='submit'>get prices</button>
                </form>
            </div>

            {loading ? <Spinner /> : <div className='my-10'>
                {stockData !== "" ? stockData.map((ele) => {
                    return <div key={i++} className='flex justify-center'>
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
                }) : <h1 className='text-center text-2xl'>No Results to show</h1>}
            </div>}
        </div>
    )
}
