/**
 * Spinner GIF 
 */
import React from 'react'
import loading from  "./loading.gif"

export default function Spinner() {
    return (
        <div className='flex justify-center mb-2' >
            <img  width={80} src={loading} alt="loader" />
        </div>
    )
}
