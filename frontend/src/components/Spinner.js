import React from 'react'
import loading from  "./loading.gif"

export default function Spinner() {
    return (
        <div className='flex justify-center mt-12' >
            <img  width={200} src={loading} alt="loader" />
        </div>
    )
}
