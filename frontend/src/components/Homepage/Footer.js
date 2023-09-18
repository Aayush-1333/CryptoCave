import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black text-white p-5 rounded-tr-[150px] md:rounded-tr-[250px]'>
            <h1 className='text-4xl col-span-3'>Other Links</h1>

            <footer className='grid grid-cols-3 grid-rows-2'>

                <div className='col p-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>
                </div>

                <div className='col p-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>

                </div>

                <div className='col p-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>
                </div>

            </footer>

        </div>
    )
}
