import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Services() {

    const [op1, setOp1] = useState('0')
    const [op2, setOp2] = useState('0')
    const [op3, setOp3] = useState('0')

    return (
        <div className="_services-bg">

            <div className='flex flex-col gap-4'>
                <h1 className='_site-title'>CryptoCave - Start exploring cryptocurrencies</h1>

                <h3 className='_services-head'>Let's get started!</h3>
            </div>

            <div id='_services' className="flex flex-wrap p-5 gap-6 justify-around text-sm md:text-xl">

                <Link to='/' className='opacity-90 hover:opacity-100' onMouseOver={() => { setOp1('100') }} onMouseLeave={() => { setOp1('0') }}>
                    <div className='_title-card'>
                        <h3 className='font-bold'>Check out prices</h3>
                        <br />
                        <p className={`opacity-${op1}`}>Use the API to know about <br /> the current ongoing stock prices</p>
                    </div>
                </Link>

                <Link to='/' className='opacity-90 hover:opacity-100' onMouseOver={() => { setOp2('100') }} onMouseLeave={() => { setOp2('0') }}>
                    <div className='_title-card'>
                        <h3 className='font-bold'>Create Portfolio</h3>
                        <br />
                        <p className={`opacity-${op2}`}>Sign-up and start creating <br /> your own portfolio using wallet</p>
                    </div>
                </Link>

                <Link to='/' className='opacity-90 hover:opacity-100' onMouseOver={() => { setOp3('100') }} onMouseLeave={() => { setOp3('0') }}>
                    <div className='_title-card'>
                        <h3 className='font-bold'>Create Wallet</h3>
                        <br />
                        <p className={`opacity-${op3}`}>Add some balance to the wallet <br /> to start trading cryptocurrencies</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}
