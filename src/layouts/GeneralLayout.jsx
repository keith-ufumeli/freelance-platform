import React from 'react'
import GeneralNavbar from '../components/navigation/GeneralNavbar'

function GeneralLayout({children}) {
    return (
        <div className="flex flex-col w-full">
            <div className="header">
                <GeneralNavbar />
            </div>
            <div className="min-h-screen bg-gray-50">
                {children}
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    )
}

export default GeneralLayout
