import React from 'react'

function YellowButton({ text, onClick, className, outline, loading }) {
    return (
        <button disabled={loading} onClick={loading ? () => console.info('Please wait while loading') : onClick} className={`${className} flex flex-row items-center outline-none border-none`}>
            <div className={`${outline ? "bg-none border border-yellow-500 rounded-sm text-yellow-500 hover:bg-yellow-500 hover:text-white " : "bg-yellow-600 text-white border border-yellow-600"} p-2 capitalize rounded-sm`}>
               
                {loading ? (
                    <div className="flex flex-row items-center">
                        <div className=" flex justify-center items-center">
                            <div className={`animate-spin rounded-full h-5 w-5 mr-2 border-t-2  border-b-2 ${outline ? "border-yellow-500 hover:border-white" : "border-white"} `}></div>
                        </div>
                        Loading...
                    </div>
                ):(
                    <p> {text}</p>
                )}
            </div>
        </button>
    )
}

export default YellowButton
