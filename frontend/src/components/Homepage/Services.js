import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {

    const [underline1, setUnderline1] = useState('')
    const [underline2, setUnderline2] = useState('')
    const [underline3, setUnderline3] = useState('')

    return (
        <div className='bg-blue-200 dark:bg-black'>
            <div className='flex flex-col gap-4'>
                <h1 className='_site-title'>CryptoCave - Start exploring cryptocurrencies</h1>

                <h3 className='_services-head'>Let's get started!</h3>
            </div>

            <div id='_services' className="flex flex-wrap p-5 gap-6 justify-around text-sm md:text-xl">

                <Link to='/crypto-stock-prices' className='opacity-90 hover:opacity-100'>
                    <div className='_title-card'>
                        <h3 className='font-bold hover:underline'>Check out prices</h3>
                        <br />
                        <p>Use the API to know about <br /> the current ongoing stock prices</p>
                    </div>
                </Link>

                <Link to='/' className='opacity-90 hover:opacity-100'>
                    <div className='_title-card'>
                        <h3 className='font-bold hover:underline'>Create Portfolio</h3>
                        <br />
                        <p>Sign-up and start creating <br /> your own portfolio using wallet</p>
                    </div>
                </Link>

                <Link to='/' className='opacity-90 hover:opacity-100'>
                    <div className='_title-card'>
                        <h3 className='font-bold hover:underline'>Create Wallet</h3>
                        <br />
                        <p>Add some balance to the wallet <br /> to start trading cryptocurrencies</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}
