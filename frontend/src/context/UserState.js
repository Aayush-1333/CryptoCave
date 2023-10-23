/**
 * This is the UserState file which contains all user-related operations and state variables
 * 
 * The following operations are as follows:
 * Login/SignUp
 * Logout
 * SendOTP
 */

import React, { useState } from 'react'
import UserContext from './UserContext'
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT
// console.log(host)


export default function UserState(props) {

    // ============ State Variables ============
    const [userData, setUserData] = useState(undefined)
    const [loginState, setLoginState] = useState(false)
    const [generatedOtp, setGeneratedOtp] = useState("")
    const [signData, setSignData] = useState({
        "username": "",
        "email": "",
        "phone_no": "",
        "password": ""
    })


    /**
     * for user login using the credentials
     * @param {*} Login Object
     * @returns Promise with boolean value
     */
    const UserLogin = async (loginData) => {
        const response = await fetch(`http://${host}:${port}/api/users/get-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...loginData })
        })

        if (response.ok) {
            console.log("Login successful!")
            const result = await response.json()
            setUserData({ ...result })
            setLoginState(true)
            return true
        }
        else {
            console.log("Login failed!")
            return false
        }
    }


    /**
     * for user signup using the form data
     * @returns Promise with boolean value
     */
    const UserSignUp = async () => {
        console.log(signData)
        const response = await fetch(`http://${host}:${port}/api/users/create-user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...signData })
        })

        if (response.ok) {
            console.log("Account created successfully!")
            setSignData({
                "username": "",
                "email": "",
                "phone_no": "",
                "password": ""
            })
            return true
        }

        else {
            console.log("Account creation failed!")
            return false
        }
    }


    /**
     * for user logout from the dashboard
     */
    const UserLogout = () => {
        setLoginState(false)
        setUserData(undefined)
    }


    /**
     * calls the API for OTP generation and sets the OTP state variable 
     */
    const SendOtp = async () => {
        const response = await fetch(`http://${host}:${port}/api/users/verify-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "email": signData.email })
        })

        const result = await response.json()
        setGeneratedOtp(result)
    }


    return (
        <UserContext.Provider value={{ UserLogin, UserSignUp, UserLogout, userData, loginState, signData, setSignData, SendOtp, generatedOtp }}>
            {props.children}
        </UserContext.Provider>
    )
}
