import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function UserDashboard() {

    const { userData, UserLogout } = useContext(UserContext)
    const navigate = useNavigate()

    const Logout = () => {
        UserLogout()
        navigate("/")
    }

    return (
        <div className='bg-gradient-to-r from-green-400 to-green-600 dark:from-slate-800 dark:to-slate-950 h-screen p-5'>
            <div className='dark:text-white'>
                <h1 className='text-3xl mb-5'>Welcome to user dashboard!</h1>

                {userData !== undefined ? <div className='flex flex-col'>
                    <div className='self-center container grid grid-rows-3 grid-cols-2 p-5 md:text-xl gap-4 bg-white dark:bg-yellow-600 rounded-xl'>
                        <h1 className='col'>Username</h1>
                        <h1 className='col'>{userData.username}</h1>

                        <h1 className='col'>Email</h1>
                        <h1 className='col'>{userData.email}</h1>

                        <h1 className='col'>Contact Number</h1>
                        <h1>{userData.phone_no}</h1>
                    </div>

                    <button className='mt-5 self-center bg-gradient-to-br from-red-400 to-red-600 dark:from-purple-600 dark:to-purple-800 p-2 rounded-xl opacity-80 hover:opacity-100' onClick={Logout}>Logout</button>
                </div> : "No Results!"}
            </div>
        </div>
    )
}
