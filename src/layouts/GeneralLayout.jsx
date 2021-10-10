import React from 'react'
import Footer from '../components/navigation/Footer'
import GeneralNavbar from '../components/navigation/GeneralNavbar'

function GeneralLayout({children}) {
    return (
        <div className=" flex flex-col w-full">
            <div className="z-50 header fixed w-full">
                <GeneralNavbar />
            </div>
            <div className="min-h-screen mt-16">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default GeneralLayout
