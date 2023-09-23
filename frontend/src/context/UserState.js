import React, { useState } from 'react'
import UserContext from './UserContext'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 5000

export default function UserState(props) {

    const [userData, setUserData] = useState(undefined)
    const [loginState, setLoginState] = useState(false)
    const [generatedOtp, setGeneratedOtp] = useState("")
    const [signData, setSignData] = useState({
        "username": "",
        "email": "",
        "phone_no": "",
        "password": ""
    })

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


    const UserLogout = () => {
        setLoginState(false)
        setUserData(undefined)
    }


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
