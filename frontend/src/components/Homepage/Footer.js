import React from 'react'

export default function Footer() {
    return (
        <div className='bg-gradient-to-br from-green-300 to-green-500 dark:from-black dark:to-gray-900 dark:text-white p-5 rounded-tr-[150px] md:rounded-tr-[250px]'>
            <h1 className='text-4xl col-span-3'>Other Links</h1>

            <footer className='grid grid-cols-3 grid-rows-2'>

                <div className='col pt-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>
                    <p>some link...</p>
                    <p>some link...</p>
                </div>

                <div className='col pt-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>
                    <p>some link...</p>
                    <p>some link...</p>

                </div>

                <div className='col pt-5'>
                    <h1>Footer title...</h1>
                    <br />
                    <p>some link...</p>
                    <p>some link...</p>
                    <p>some link...</p>
                </div>

            </footer>

        </div>
    )
}
