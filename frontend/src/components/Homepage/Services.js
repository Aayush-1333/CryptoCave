import React from 'react'

export default function Services() {
    return (
        <div className="_services-bg">

            <div className='flex flex-col gap-4'>
                <h1 className='_site-title'>CryptoCave - Start exploring cryptocurrencies</h1>

                <h3 className='_services-head'>Let's get started!</h3>
            </div>

            <div id='_services' className="flex flex-wrap p-5 gap-6 justify-around text-sm md:text-xl">

                <div className='_title-card'>
                    <h3>Check out prices</h3>
                    <br />
                    <p>This is some description...</p>
                </div>

                <div className='_title-card'>
                    <h3>Create Portfolio</h3>
                    <br />
                    <p>This is some description...</p>
                </div>

                <div className='_title-card'>
                    <h3>Title card</h3>
                    <br />
                    <p>This is some description...</p>
                </div>
            </div>
        </div>
    )
}
