import React from 'react'

function Error({text}) {
    return (
        <div className="text-sm bg-red-200 p-2 rounded w-full">
            <p className="text-red-800 text-center">{text}</p>
        </div>
    )
}

export default Error
