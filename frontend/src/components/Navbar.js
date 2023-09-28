import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Navbar() {

    const [bg, setBg] = useState(String.fromCharCode(9789))
    const currLoc = useLocation()
    const { loginState } = useContext(UserContext)


    const ChangeBg = () => {
        let htmlTag = document.documentElement

        if (bg === String.fromCharCode(9789))
            setBg(String.fromCharCode(9788))
        else
            setBg(String.fromCharCode(9789))

        htmlTag.classList.toggle("dark")
    }

    return (
        <div className='_navbar'>

            <nav className='col md:col-span-6 text-center self-center md:ml-40 p-5 md:space-x-8 font-bold'>

                <Link to='/' className={`p-2 hover:underline underline-offset-4 
                ${currLoc.pathname === '/' ? 'text-indigo-500 dark:text-purple-300 underline' : 'text-black dark:text-yellow-500'}`}>
                    Home
                </Link>

                <Link to='/about' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/about' ? 'text-indigo-500 dark:text-purple-300 underline' : 'text-black dark:text-yellow-500'}`}>
                    About</Link>

                <Link to='/contacts' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/contacts' ? 'text-indigo-500 dark:text-purple-300 underline' : 'text-black dark:text-yellow-500'}`}>
                    Contacts
                </Link>

                <Link to='/help' className={`p-2 hover:underline underline-offset-4 ${currLoc.pathname === '/help' ? 'text-indigo-500 dark:text-purple-300 underline' : 'text-black dark:text-yellow-500'}`}>
                    Help
                </Link>

            </nav>

            <div className='col self-center space-x-2 md:space-x-4 p-1 md:p-5 text-right text-white'>
                {loginState ? <Link to='/users/user-dashboard' className='_login-btn'>Profile</Link> : <Link to='/users/login' className='_login-btn'>Login</Link>}

                <button type='button' onClick={ChangeBg} className='_bg-change-btn'>{bg}</button>
            </div>
        </div>
    )
}
