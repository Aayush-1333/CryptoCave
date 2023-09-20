import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Verify() {

    const [otp, setOtp] = useState("")
    const { UserSignUp, generatedOtp, SendOtp } = useContext(UserContext)
    const navigate = useNavigate()

    const OnChange = (e) => {
        setOtp(e.target.value)
    }

    const SubmitForm = async (e) => {
        e.preventDefault()
        if (otp === generatedOtp) {
            const result = await UserSignUp()
            if (result)
                navigate("/users/login")
        }
        else
            console.log("incorrect otp")
    }

    const ResendOtp = () => {
        SendOtp()
    }

    return (
        <div className='flex justify-center bg-gradient-to-r from-orange-500 to-orange-800 dark:from-slate-600 dark:to-slate-950 h-screen' onSubmit={SubmitForm}>
            <div className='mt-14'>
                <form className='self-center bg-purple-600 dark:bg-gray-500 container p-5 rounded-xl'>
                    <label>Enter OTP</label>
                    <br />
                    <input className='p-1 rounded-xl mt-4' type="text" value={otp} onChange={OnChange} />
                    <br />
                    <br />
                    <div className='flex justify-center gap-4'>
                        <button type="button" className='bg-blue-500 hover:bg-blue-600 p-2 rounded-xl' onClick={ResendOtp}>Resend OTP</button>
                        <button type='submit' className='bg-green-500 hover:bg-green-600 p-2 rounded-xl'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
