import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Verify() {

    const [otp, setOtp] = useState("")
    const { UserSignUp } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(otp)
    }, [otp])

    const OnChange = (e) => {
        setOtp(e.target.value)
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        const result = await UserSignUp()
        if (result)
            navigate("/users/login")
    }

    return (
        <div className='flex justify-center bg-purple-500 h-screen' onSubmit={SubmitForm}>
            <form className='self-center bg-gray-500 container p-5 rounded-xl'>
                <label>Enter OTP</label>
                <br />
                <input className='p-1 rounded-xl mt-4' type="text" value={otp} onChange={OnChange} />
                <br />
                <br />
                <button className='bg-green-500 p-3 rounded-xl'>Submit</button>
            </form>
        </div>
    )
}
