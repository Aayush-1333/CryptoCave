import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {

    const [style1, setStyle1] = useState('dark:border-black')
    const [style2, setStyle2] = useState('dark:border-black')
    const [style3, setStyle3] = useState('dark:border-black')

    return (
        <div className='bg-blue-200 dark:bg-black' style={{ height: '650px' }}>
            <div className='flex flex-col gap-4'>
                <h1 className='_site-title'>CryptoCave - Start exploring cryptocurrencies</h1>

                <h3 className='_services-head'>Let's get started!</h3>
            </div>

            <div id='_services' className="flex flex-wrap p-5 gap-6 justify-around text-sm md:text-xl">

                <Link to='/crypto-stock-prices' className='dark:opacity-70' onMouseEnter={() => { setStyle1('border border-black dark:border-white') }} onMouseLeave={() => { setStyle1('dark:border-black') }} >
                    <div className='_title-card'>
                        <h3 className='font-bold'>Check out prices</h3>
                        <br />
                        <p>Use the API to know about <br /> the current ongoing stock prices</p>
                    </div>
                    <hr className={`${style1}`} />
                </Link>

                <Link to='/' className='dark:opacity-70' onMouseEnter={() => { setStyle2('border border-black dark:border-white') }} onMouseLeave={() => { setStyle2('dark:border-black') }}>
                    <div className='_title-card'>
                        <h3 className='font-bold'>Create Portfolio</h3>
                        <br />
                        <p>Sign-up and start creating <br /> your own portfolio using wallet</p>
                    </div>
                    <hr className={`${style2}`} />
                </Link>

                <Link to='/' className='dark:opacity-70' onMouseEnter={() => { setStyle3('border border-black dark:border-white') }} onMouseLeave={() => { setStyle3('dark:border-black') }}>
                    <div className='_title-card'>
                        <h3 className='font-bold'>Create Wallet</h3>
                        <br />
                        <p>Add some balance to the wallet <br /> to start trading cryptocurrencies</p>
                    </div>
                    <hr className={`${style3}`} />
                </Link>

            </div>
        </div>
    )
}
