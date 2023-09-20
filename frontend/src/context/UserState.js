import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserState(props) {

    const [userData, setUserData] = useState(undefined)
    const [loginState, setLoginState] = useState(false)
    const [signData, setSignData] = useState({
        "username": "",
        "email": "",
        "phone_no": "",
        "password": ""
    })

    const UserLogin = async (loginData) => {
        const response = await fetch("http://localhost:5000/api/users/get-user", {
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
        const response = await fetch("http://localhost:5000/api/users/create-user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...signData })
        })

        if (response.ok) {
            console.log("Account created successfully!")
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


    return (
        <UserContext.Provider value={{ UserLogin, UserSignUp, UserLogout, userData, loginState, signData, setSignData }}>
            {props.children}
        </UserContext.Provider>
    )
}
