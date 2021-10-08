import React from 'react'

function Success({text}) {
    return (
        <div className="bg-green-200 p-2 rounded w-full my-1">
            <p className="text-sm text-center">{text}</p>
        </div>
    )
}

export default Success
