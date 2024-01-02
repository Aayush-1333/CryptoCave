import React from 'react'

export default function About() {
    return (
        <div className='container-fluid py-2  dark:bg-black dark:to-gray-400 h-screen'>
            <h2 className='text-4xl px-2 dark:text-yellow-500'>About Us</h2>
            <br />
            <div className='bg-indigo-300 dark:bg-gray-700 dark:text-white p-2 text-xl space-y-8'>
                <p className='leading-loose'>
                    This cryptocave project is developed by me and my teammates: Somangshu, Yadnesh and Aayush Sinha with a vision
                    to provide crypto currency trading platform to the users for engaging in the growing market of crypto-currencies and blockchain. Using the technology of MERN stack - MongoDB, ExpressJS, ReactJS and NodeJS. We deliver data thereby mantaining low latency which is achieved by our single web page application.
                </p>
                <p className='leading-loose'>
                    This site aims to provide login, user dashboard, portfolio management and tracking of crypto market uisng the crypto market API - "Alphavantage" which is known for its Stock Market and News API is used for populating the crypto market data which is refreshed daily. However, these values are approximate estimations. Hence they are not accurate results as market reates fluctuate rapidly with time.
                </p>
                <p className='leading-loose'>
                    So, I hope you like our project. It is in its initial phases but it'll soon come out in its beta phase. Thank you!!
                </p>

                <p className='text-2xl text-center italic'>Project CryptoCave - Alpha Version</p>
            </div>
        </div>
    )
}
