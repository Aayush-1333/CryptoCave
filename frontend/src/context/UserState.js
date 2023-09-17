import React from 'react'
import UserContext from './UserContext'

export default function UserState(props) {

    const UserLogin = async (loginData) => {
        const response = await fetch("", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(...loginData)
        })

        if (response.ok)
            console.log("Login successfully!")
        else
            console.log("Login failed!")
    }


    return (
        <UserContext.Provider value={{ UserLogin }}>
            {props.children}
        </UserContext.Provider>
    )
}
