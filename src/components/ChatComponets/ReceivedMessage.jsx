import React from 'react'

function ReceivedMessage({message}) {
    return (
        <div className="text-white bg-gray-200 mb-1 text-sm p-2 rounded self-start">
            <p className="text-gray-700">{message}</p>
        </div>
    )
}

export default ReceivedMessage
