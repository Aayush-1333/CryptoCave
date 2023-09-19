import React from 'react'
import UserContext from './UserContext'
import { redirect } from 'react-router-dom'

export default function UserState(props) {

    const UserLogin = async (loginData) => {
        const response = await fetch("", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...loginData })
        })

        if (response.ok)
            console.log("Login successfully!")
        else
            console.log("Login failed!")
    }


    const UserSignUp = async (signUpData) => {
        const response = await fetch("http://192.168.1.37:5000/api/users/create-user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...signUpData })
        })

        if (response.ok) {
            console.log("Account created successfully!")
            return redirect("/login")
        }

        else {
            console.log("Account creation failed!")
            return redirect("/signup")
        }
    }


    return (
        <UserContext.Provider value={{ UserLogin, UserSignUp }}>
            {props.children}
        </UserContext.Provider>
    )
}
