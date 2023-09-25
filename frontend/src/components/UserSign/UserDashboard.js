import React from 'react'
import UserDetails from './UserDetails'
import UserTransactions from './UserTransactions'

export default function UserDashboard() {
    return (
        <div className='bg-white dark:bg-black h-screen p-5 space-y-10'>
            <UserDetails />
            <UserTransactions />
        </div>
    )
}
