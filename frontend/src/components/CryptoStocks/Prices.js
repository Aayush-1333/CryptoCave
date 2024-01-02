/**
 * This is the Prices component of the webapp
 */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CryptoContext from '../../context/CryptoContext'
import UserContext from '../../context/UserContext'
import Spinner from '../Spinner'
import Chart from 'chart.js/auto';

export default function Prices() {

    // ========= Context variable ========
    const { FetchPrices, loading, setLoading, result, setResult } = useContext(CryptoContext)
    const { loginState } = useContext(UserContext)

    // ======== State variables =========
    const [chartObj, setChartObj] = useState(undefined)
    const [stockData, setStockData] = useState("")
    const [stockOps, setStockOps] = useState({
        "freq": "Daily",
        "currency": "BTC",
        "market": "USD"
    })

    // For redirection
    const navigate = useNavigate()

    // Function is used to make a 2d Chart to visualize data
    const MakeChart = () => {
        let ctx = document.getElementById('my-chart').getContext("2d")
        try {
            setChartObj(new Chart(ctx, {
                type: 'line',
                data: {
                    labels: stockData.map(row => row.date),
                    datasets: [{
                        label: 'Stock open values by date',
                        data: stockData.map(row => row.open),
                        borderColor: "red",
                        hoverBackgroundColor: "orange",
                        backgroundColor: [
                            "green",
                            "blue"
                        ]
                    },
                    {
                        label: 'Stock close values by date',
                        data: stockData.map(row => row.close),
                        borderColor: "blue",
                        hoverBackgroundColor: "pink",
                        backgroundColor: [
                            "red",
                            "blue"
                        ]
                    }]
                }
            }))
            setLoading(false)

        } catch (err) {
            console.log("error: ", err)
        }
    }


    // Submits the form to update the data
    const SubmitForm = async (e) => {
        e.preventDefault()

        // if chart object does not exists create a new one, else destroy the existing one and create new
        if (chartObj !== undefined)
            chartObj.destroy()

        // set loading to true
        setLoading(true)

        try {
            setStockData(await FetchPrices(stockOps))
        } catch (error) {
            setStockData("")
        }
    }


    // applies side-effects to the component on updation of stock data
    useEffect(() => {
        if (loginState === false)
            navigate('/users/login')

        if (stockData !== "") {
            setResult("")
            MakeChart()
        }
    }, [stockData, MakeChart, loginState, navigate, setResult])


    // handles the change of fields in the form
    const OnChange = (e) => {
        setStockOps({ ...stockOps, [e.target.name]: e.target.value })
    }


    return (
        <div className={`flex flex-col p-5 bg-white dark:bg-black dark:text-white h-screen md:h-max`}>
            <h1 className='text-2xl md:text-4xl mb-12'>Check out prices!</h1>

            <div className='md:flex space-y-8 md:space-y-0 justify-around'>
                <form onSubmit={SubmitForm} className='flex flex-col rounded-xl space-y-4 bg-gray-400 dark:bg-zinc-900 px-10 md:px-24 pt-5'>
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
                        {/* <option value="EUR">Euro (EUR)</option> */}
                    </select>

                    <button className='bg-indigo-300 hover:bg-indigo-500 dark:bg-slate-800 dark:hover:bg-slate-900 self-center mt-4 p-2 rounded-xl' type='submit'>get prices</button>
                </form>
                <div className='grow flex flex-col'>
                    {loading ? <Spinner /> : <h1 className='text-3xl ml-5 mb-1'>{`${result}`}</h1>}
                    <canvas id='my-chart' className='dark:text-black dark:bg-slate-300 p-5 rounded-xl ml-5'></canvas>
                </div>
            </div>

            {stockData ? <div className='mt-12 p-5'>
                <h1 className='text-3xl'>Currency Details - {stockOps.currency}</h1>
                <div className='container flex p-5 mt-10 bg-gradient-to-br from-indigo-200 to-indigo-300 dark:from-yellow-600 dark:to-yellow-700 rounded-xl'>
                    <div>
                        <h2 className='text-2xl'>Current opening price <span className='underline underline-offset-8'>{stockData[stockData.length - 1].open} {stockOps.market}</span></h2>
                    </div>

                    <div>
                        <h2 className='text-2xl'>Current closing price <span className='underline underline-offset-8'>{stockData[stockData.length - 1].close} {stockOps.market}</span></h2>
                    </div>

                    <div>
                        <h2 className='text-2xl'>Current highest price <span className='underline underline-offset-8'>{stockData[stockData.length - 1].high} {stockOps.market}</span></h2>
                    </div>

                    <div>
                        <h2 className='text-2xl'>Current lowest price <span className='underline underline-offset-8'>{stockData[stockData.length - 1].low} {stockOps.market}</span></h2>
                    </div>

                </div>
            </div> : "No data"}
        </div>
    )
}
