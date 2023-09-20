import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import Verify from './Verify';
import Login from './Login';
import SignUp from './SignUp';
import UserDashboard from './UserDashboard';


export default function Users() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
        </Routes>
    )
}
