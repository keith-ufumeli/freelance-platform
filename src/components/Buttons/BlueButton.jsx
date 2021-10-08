import React from 'react'

function BlueButton({ text, onClick, className, outline, loading }) {
    return (
        <button disabled={loading} onClick={loading ? () => console.info('Please wait while loading') : onClick} className={`${className} flex flex-row items-center outline-none border-none w-full my-2`}>
            <div className={`${outline ? "bg-none border border-blue-900 rounded-sm text-blue-900 hover:bg-blue-900 hover:text-white " : "bg-blue-900 text-white border border-blue-900 hover:bg-blue-800"} p-2 capitalize rounded-sm w-full`}>

                {loading ? (
                    <div className="flex flex-row items-center justify-center">
                        <div className={`animate-spin rounded-full h-5 w-5 mr-2 border-t-2  border-b-2 ${outline ? "border-blue-900 hover:border-white" : "border-white"}`}></div>
                        <p className={className}>Loading...</p>
                    </div>
                ) : (
                    <p className={className}> {text}</p>
                )}
            </div>
        </button>
    )
}

export default BlueButton
