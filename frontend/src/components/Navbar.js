import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const [bg, setBg] = useState("dark")
    const currLoc = useLocation()

    const ChangeBg = () => {
        let htmlTag = document.documentElement

        if (bg === "dark")
            setBg("light")
        else
            setBg("dark")

        htmlTag.classList.toggle("dark")
    }

    return (
        <div className='grid grid-rows-1 grid-cols-2 md:grid-cols-7 bg-gradient-to-r from-indigo-500 to-indigo-900 dark:from-zinc-500 dark:to-zinc-800 text-xs md:text-lg'>

            <nav className='col md:col-span-6 text-center self-center md:ml-40 p-5 md:space-x-8 font-bold'>

                <Link to='/' className={`p-2 hover:underline underline-offset-4 
                ${currLoc.pathname === '/' ? 'text-green-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Home
                </Link>

                <Link to='/about' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/about' ? 'text-green-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    About</Link>

                <Link to='/contacts' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/contacts' ? 'text-green-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Contacts
                </Link>

                <Link to='/help' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/help' ? 'text-green-300 underline' : 'text-white dark:text-yellow-500'}`}>
                    Help
                </Link>

            </nav>

            <div className='col self-center space-x-2 md:space-x-4 p-1 md:p-5 text-right'>
                <Link to='/login' className='border-2 border-black bg-white p-1 rounded-lg opacity-60 hover:opacity-100'>Login</Link>
                <button type='button' onClick={ChangeBg} className='border-2 border-black bg-white px-3 py-1 rounded-full opacity-60 hover:opacity-100'>{bg}</button>
            </div>
        </div>
    )
}
