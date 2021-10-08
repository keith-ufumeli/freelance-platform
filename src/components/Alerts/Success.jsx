import React from 'react'

function Success({text}) {
    return (
        <div className="bg-green-200 p-2 rounded">
            <p className="text-sm text-center">{text}</p>
        </div>
    )
}

export default Success
