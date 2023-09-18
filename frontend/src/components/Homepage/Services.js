import React from 'react'

export default function Services() {
    return (
        <div className="bg-[url('https://t3.ftcdn.net/jpg/02/56/27/88/360_F_256278888_uqEBHJRASsR75xwf0QmUavcAZ6mQdcON.jpg')] border-b-8 border-indigo-950 rounded-bl-[220px]">

            <div className='flex flex-col gap-4'>

                <h1 className='self-start text-2xl bg-gradient-to-br from-indigo-800 to-indigo-950 text-white dark:text-yellow-500 font-bold  dark:from-gray-800 dark:to-gray-950 md:text-4xl p-3 m-4 rounded-xl'>CryptoCave - Start exploring cryptocurrencies</h1>

                <h3 className='self-center bg-gradient-to-br from-indigo-800 to-indigo-950 text-white  dark:from-gray-800 dark:to-gray-950 dark:text-yellow-500 font-bold text-xl md:text-3xl p-3 rounded-xl'>Let's get started!</h3>
            </div>

            <div id='_services' className="flex flex-wrap p-5 gap-6 justify-around text-sm md:text-xl">

                <div className='bg-slate-600 p-5 rounded-xl'>
                    <h3>Title card</h3>
                    <br />
                    <p>This is some description...</p>
                </div>

                <div className='bg-slate-600 p-5 rounded-xl'>
                    <h3>Title card</h3>
                    <br />
                    <p>This is some description...</p>
                </div>

                <div className='bg-slate-600 p-5 rounded-xl'>
                    <h3>Title card</h3>
                    <br />
                    <p>This is some description...</p>
                </div>
            </div>
        </div>
    )
}
