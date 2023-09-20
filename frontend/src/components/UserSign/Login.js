import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [passwdStyle, setPasswdStyle] = useState("password")
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const { UserLogin } = useContext(UserContext)
    const navigate = useNavigate()

    const ChangePasswdStyle = () => {
        if (passwdStyle === "password")
            setPasswdStyle("text")
        else
            setPasswdStyle("password")
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        const result = await UserLogin(loginData)
        setLoginData({
            email: "",
            password: ""
        })
        
        if (result)
            navigate("/users/user-dashboard")
    }

    const OnChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    return (
        <div className='p-5 bg-gradient-to-r from-indigo-700 to-indigo-950 dark:from-slate-600 dark:to-slate-900 h-screen'>
            <form className='flex justify-center my-10' onSubmit={SubmitForm}>

                <div className='bg-green-500 dark:bg-yellow-600 flex flex-col p-10 self-center rounded-xl'>
                    <h2 className='text-center text-3xl font-bold'>Let's get back to crypto journey!</h2>

                    <div className='flex flex-col p-2 self-center'>
                        <label htmlFor="email" className='p-2 text-xl'>Email</label>
                        <input type="email" className='rounded-lg p-1' placeholder='Your email' name='email' value={loginData.email} onChange={OnChange} required />
                    </div>

                    <div className='flex flex-col p-2 self-center'>
                        <label htmlFor="password" className='p-2 text-xl'>Password</label>
                        <input type={passwdStyle} className='rounded-lg p-1' placeholder='Your password' name='password' value={loginData.password} onChange={OnChange} required />
                        <div className='flex mt-4 space-x-4'>
                            <input type="checkbox" className='rounded-lg p-1' name='show-passwd' onClick={ChangePasswdStyle} />
                            <label htmlFor="show-passwd text-xl">Show password</label>
                        </div>
                    </div>


                    <div className='self-center space-x-8 my-6'>
                        <button type='submit' className='bg-white opacity-60 hover:opacity-100 p-1 border border-3 rounded-lg'>Login</button>

                        <Link to='/' className='bg-white opacity-60 hover:opacity-100 p-1 border border-3 rounded-lg'>Back</Link>
                    </div>

                    <div className='self-center'>
                        <p>Don't have an account? <Link to='/users/signup' className='text-blue-700 hover:text-blue-500'>Sign Up</Link></p>
                    </div>
                </div>

            </form>
        </div>
    )
}
