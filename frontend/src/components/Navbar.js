import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const [bg, setBg] = useState(String.fromCharCode(9789))
    const currLoc = useLocation()

    const ChangeBg = () => {
        let htmlTag = document.documentElement

        if (bg === String.fromCharCode(9789))
            setBg(String.fromCharCode(9788))
        else
            setBg(String.fromCharCode(9789))

        htmlTag.classList.toggle("dark")
    }

    return (
        <div className='grid grid-rows-1 grid-cols-2 md:grid-cols-7 bg-gradient-to-br from-indigo-300 to-indigo-500 dark:from-zinc-500 dark:to-zinc-800 text-xs md:text-lg'>

            <nav className='col md:col-span-6 text-center self-center md:ml-40 p-5 md:space-x-8 font-bold'>

                <Link to='/' className={`p-2 hover:underline underline-offset-4 
                ${currLoc.pathname === '/' ? 'text-green-300 dark:text-purple-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Home
                </Link>

                <Link to='/about' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/about' ? 'text-green-300 dark:text-purple-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    About</Link>

                <Link to='/contacts' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/contacts' ? 'text-green-300 dark:text-purple-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Contacts
                </Link>

                <Link to='/help' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/help' ? 'text-green-300 dark:text-purple-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Help
                </Link>

            </nav>

            <div className='col self-center space-x-2 md:space-x-4 p-1 md:p-5 text-right text-white'>
                <Link to='/login' className='border-2 border-black font-bold bg-gradient-to-r dark:bg-slate-600 dark:text-yellow-500 p-2 rounded-2xl opacity-60 hover:opacity-100'>Login</Link>

                <button type='button' onClick={ChangeBg} className='text-2xl border-2 border-black bg-black dark:bg-white dark:text-black px-3 py-1 rounded-full opacity-60 hover:opacity-100'>{bg}</button>
            </div>
        </div>
    )
}
