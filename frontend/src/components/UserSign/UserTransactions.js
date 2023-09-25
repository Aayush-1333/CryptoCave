import React from 'react'

export default function UserTransactions() {
    return (
        <div className='dark:text-white flex flex-col gap-2'>
            <h1 className='text-3xl'>Transactions Record</h1>
            <hr className='border-2 dark:border-white' />
            <div className="grid grid-rows-1 grid-cols-4 px-5">
                <div className="col"><h3 className='text-2xl'>Date</h3></div>
                <div className="col"><h3 className='text-2xl'>Amount</h3></div>
                <div className="col"><h3 className='text-2xl'>Recipient</h3></div>
                <div className="col"><h3 className='text-2xl'>Status</h3></div>
            </div>
            <div className='grid p-5'>
                <div className='row grid gap-2'>
                    <div className='row grid grid-cols-4'>
                        <p className='col'>12-03-2023</p>
                        <p className='col'>INR 21300</p>
                        <p className='col'>TechnoSolution Pvt.</p>
                        <p className='col'>DR</p>
                    </div>
                    <hr className='border-2 dark:border-white' />
                    <div className='row grid grid-cols-4'>
                        <p className='col'>14-03-2023</p>
                        <p className='col'>INR 51300</p>
                        <p className='col'>ICICI</p>
                        <p className='col'>DR</p>
                    </div>
                    <hr className='border-2 dark:border-white' />
                </div>
            </div>
        </div>
    )
}
