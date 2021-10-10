import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatBody from '../components/ChatComponets/ChatBody'
import ChatLeft from '../components/ChatComponets/ChatLeft'
import GeneralNavbar from '../components/navigation/GeneralNavbar'

function Chat() {
    const _toggle_chat = useSelector(state => state.toggle_chat)
    const { chat_state } = _toggle_chat
    

    return (
        <div >
            <GeneralNavbar />
            <div className="md:flex hidden">
                <div className=" grid grid-cols-4 min-h-screen border">
                    <div className="lg:col-span-1 md:col-span-2 col-span-4 border-r border-gray-200">
                        <ChatLeft />
                    </div>
                    <div className="md:flex hidden lg:col-span-3 md:col-span-2 w-full flex-col md:p-4 p-2">
                        <ChatBody />
                    </div>
                </div>
            </div>
            <div className="md:hidden flex">
                {
                    chat_state === 'open' ? (
                        <div className="w-full flex-col">
                            <ChatBody />
                        </div>
                    ) : (
                        <div className="w-full">
                            <ChatLeft />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Chat
