/**
 * This is the signup page for user account registration
 */
import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const [passwdStyle, setPasswdStyle] = useState("password")
    const { signData, setSignData, SendOtp } = useContext(UserContext)
    const navigate = useNavigate()

    const SubmitForm = async (e) => {
        e.preventDefault()
        SendOtp()
        navigate("/users/verify")
    }

    const OnChange = (e) => {
        setSignData({ ...signData, [e.target.name]: e.target.value })
    }

    const ClearForm = () => {
        setSignData({
            "username": "",
            "email": "",
            "phone_no": "",
            "password": ""
        })
    }

    const ChangePasswdStyle = () => {
        if (passwdStyle === "password")
            setPasswdStyle("text")
        else
            setPasswdStyle("password")
    }

    return (
        <div className='container-fluid flex justify-center p-16 bg-white dark:bg-black'>
            <form className='flex flex-col bg-indigo-400 dark:bg-yellow-600 gap-8 px-14 py-6 md:px-64 md:py-20 rounded-2xl' onSubmit={SubmitForm}>

                <h1 className='text-2xl md:text-3xl font-bold text-center'>Let's register!</h1>

                <div className='self-center flex flex-col gap-4'>
                    <label htmlFor="username" className='md:text-xl'>Username</label>
                    <input type="text" className='rounded-lg p-1 md:p-2' name="username" placeholder='Your username' value={signData.username} onChange={OnChange} required />
                </div>

                <div className='self-center flex flex-col gap-4'>
                    <label htmlFor="email" className='md:text-xl'>Email</label>
                    <input type="email" className='rounded-lg p-1 md:p-2' name="email" placeholder='Your email' value={signData.email} onChange={OnChange} required />
                </div>

                <div className='self-center flex flex-col gap-4'>
                    <label htmlFor="phone_no" className='md:text-xl'>Contact No.</label>
                    <input type="tel" className='rounded-lg p-1 md:p-2' name="phone_no" placeholder='Your phone no.' value={signData.phone_no} onChange={OnChange} required />
                </div>

                <div className='self-center flex flex-col gap-4'>
                    <label htmlFor="password" className='md:text-xl'>Password</label>
                    <input type={passwdStyle} className='rounded-lg p-1 md:p-2' name="password" placeholder='Your password' value={signData.password} onChange={OnChange} required />
                </div>

                <div>
                    <input type="checkbox" onClick={ChangePasswdStyle} />
                    <label htmlFor="" className='text-xl mx-5'>Show password</label>
                </div>

                <div className='flex justify-around'>
                    <button type='submit' className='bg-gradient-to-br from-green-800 to-green-400 font-bold text-white p-1 md:p-3 rounded-xl border-2 border-black opacity-60 hover:opacity-100'>Register</button>

                    <button type='reset' className='bg-gradient-to-br from-red-800 to-red-400 font-bold text-white px-3 py-1 md:px-5 md:py-3 rounded-xl border-2 border-black opacity-60 hover:opacity-100' onClick={ClearForm}>Clear</button>
                </div>

            </form>
        </div>
    )
}
