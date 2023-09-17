import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='grid grid-rows-1 grid-cols-2 md:grid-cols-7 bg-slate-400 text-xs md:text-lg'>
            <nav className='col md:col-span-6 text-center self-center md:ml-40 p-5 md:space-x-8'>
                <Link to='/' className='p-2'>Link1</Link>
                <Link to='/' className='p-2'>Link2</Link>
                <Link to='/' className='p-2'>Link3</Link>
                <Link to='/' className='p-2'>Link4</Link>
            </nav>

            <div className='col self-center space-x-2 md:space-x-4 p-1 md:p-5 text-right'>
                <Link to='/login' className='border-2 border-black bg-white p-1 rounded-lg opacity-60 hover:opacity-100'>Login</Link>
                <button type='button' className='border-2 border-black bg-white px-3 py-1 rounded-full opacity-60 hover:opacity-100'>&#9789;</button>
            </div>
        </div>
    )
}
