import React from 'react'

export default function Contacts() {
    return (
        <div className='bg-indigo-400 dark:bg-gray-700 h-screen'>
            <div className='p-5 dark:text-white'>
                <h2 className='text-4xl dark:text-yellow-500'>Contact Us</h2>
                <div className='p-5 text-xl'>
                    <ul className='leading-loose'>
                        <li><span className='text-rose-700 font-bold'>Aayush Chaurasia</span> (GitHub Account: Aayush-1333) - Full Stack Developer</li>
                        <li><span className='text-green-700 font-bold'>Aayush Sinha</span> (GitHub Account: Nightowl69) - Frontend Developer and Team Leader</li>
                        <li><span className='text-fuchsia-700 font-bold'>Yadnesh Govalkar</span> (GitHub Account: YDJedi) - Backend Developer</li>
                        <li><span className='text-yellow-700 font-bold'>Somagshu Chakraborty</span> (GitHub Account: somangshu-create) - Database Admin</li>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    )
}
