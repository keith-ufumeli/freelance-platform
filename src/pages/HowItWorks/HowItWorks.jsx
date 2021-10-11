import React from 'react'
import search from '../../assets/search.svg'
import referal from '../../assets/referal.svg'
import analytics from '../../assets/analytics.svg'
import location from '../../assets/choose.svg'
import future from '../../assets/future.svg'
import GeneralLayout from '../../layouts/GeneralLayout'

function HowItWorks() {
    return (
        <GeneralLayout>
            <div className="flex flex-col md:px-24 px-8 bg-gray-50 dark:bg-gray-900 pb-16 pt-16">


            <div className="relative py-16 overflow-hidden">
                
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Daypitch</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Be your own boss.
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Work from anywhere, at your own time. And be your own boss
                        </p>
                        </div>
                    </div>
                        <div className="min-h-screen flex flex-row items-center w-full">
                            <div className="flex flex-col w-full justify-between">
                                {/* <p className="text-gray-900 md:text-2xl dark:text-gray-200 text-sm text-center font-semibold self-center mt-4 mb-16 capitalize">How it works</p> */}
                                <div className="flex md:flex-row flex-col items-center justify-between">
                                    <HowItem
                                        pic={search}
                                        text="Search professional from around your area"
                                    />
                                    <HowItem
                                        pic={referal}
                                        text="Professionals create accounts and manage their services, while users can use referrals to connect professionals and clients"
                                    />
                                    <HowItem
                                        pic={analytics}
                                        text="Analyse growth of your business and manage your customers using analytics dashboard"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-blue-100 self-center text-sm my-16 font-semibold text-blue-900  p-2 rounded-sm">Daypitch overflow</p>
                <div className="below min-h-screen">
                    <div className="1 grid md:grid-cols-2 grid-cols-1 md:mb-32 mb-16 items-center gap-24">
                        <div className="left col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Market</p>
                            <p className="text-gray-700 dark:text-gray-500">You also have a free platform to market and advertise your 
                            business and profession so you can be connected to people who are interested in your services </p>
                        </div>
                        <div className="roight col-span-1 items-center mx-auto">
                            <img src={future} alt="ffsvg" className="w-72" />
                        </div>
                    </div>
                    <div className="1 grid md:grid-cols-2 grid-cols-1 items-center gap-24">
                        <div className="left col-span-1 mx-auto">
                            <img src={location} alt="search_svg" className="w-72" />
                        </div>
                        <div className="roight col-span-1">
                            <p className="font-semibold text-gray-800 dark:text-gray-300 mb-8">Choice</p>
                            <p className="text-gray-700 dark:text-gray-500">Having a place to properly choose your local professionals in your area is a great advantage.
                                So just search area, category and range u want for your services </p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>        
            </div>
        </GeneralLayout>
    )
}

const HowItem = ({ pic, text }) => {
    return (
        <div className="flex flex-col w-60  mb-24 items-center">
            <div className="imag w-48 md:h-48 h-28 md:mb-4 mb-32">
                <img src={pic} alt="search_svg" />
            </div>
            <p className="text-gray-700 dark:text-gray-500 text text-center">{text}</p>
        </div>
    )
}

export default HowItWorks
