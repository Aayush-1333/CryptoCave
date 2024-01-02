import React, { useState } from 'react'

export default function Help() {

    const [showMsg, setShowMsg] = useState("hidden")

    const ShowConfirmation = async (e) => {
        e.preventDefault()
        setShowMsg('')
        // Sets a timeout function to hide the message
        setTimeout(() => {
            setShowMsg('hidden')
        }, 2000)
    }


    return (
        <div className='container-fluid py-2 dark:bg-black dark:to-gray-400 h-screen'>
            <p className={`dark:text-white text-lg pb-2 px-3 bg-green-600 ${showMsg}`}>Query sent successfully!!</p>
            <h2 className='text-4xl px-2 dark:text-yellow-500'>Help Page</h2>
            <br />
            <h3 className='text-2xl p-2 dark:text-white'>Put your query and we'll reply back to you!</h3>
            <div className='flex justify-center dark:text-white p-2 text-xl space-y-8'>
                <form onSubmit={ShowConfirmation} className='container bg-indigo-400 dark:bg-gray-500 rounded-xl space-y-6 p-5 w-1/2'>
                    <div className='flex px-4 flex-col space-y-4 items-center'>
                        <div className='w-[290px]'>
                            <label htmlFor="name" className='self-start'>Name</label>
                        </div>
                        <input name='name' className='w-1/3 rounded-xl p-1 dark:bg-gray-800 dark:text-white' type="text" />
                    </div>

                    <div className='flex px-4 flex-col space-y-4 items-center'>
                        <div className='w-[290px]'>
                            <label htmlFor="email" className='self-start'>Email</label>
                        </div>
                        <input name='email' className='w-1/3 rounded-xl p-1 dark:bg-gray-800 dark:text-white' type="email" />
                    </div>

                    <div className='flex px-4 flex-col space-y-4 items-center'>
                        <div className='w-[400px]'>
                            <label htmlFor="name" className='self-start'>Query</label>
                        </div>
                        <textarea className='w-1/2 h-[200px] rounded-xl p-1 dark:bg-gray-800 dark:text-white' type="text" />
                    </div>

                    <div className='flex px-4 flex-col space-y-4 items-center'>
                        <button type='submit' className='bg-green-600 hover:bg-green-700 p-2 rounded-xl text-center'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
