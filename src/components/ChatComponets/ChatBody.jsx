import { ArrowLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { close_chat_Action } from '../../redux/actions/chatActions'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'

function ChatBody() {
    const dispatch = useDispatch()

    const close_chat = () =>{
        dispatch(close_chat_Action())
    }

    return (
        <div className="flex flex-col w-full md:p-4 p-2 md:h-full h-full flex-1">
            <div onClick={close_chat} className="md:hidden flex py-4 mb-2 border-b border-gray-300 flex-row items-center">
                <ArrowLeftIcon height={16} width={16} className='text-gray-700 mr-2' />
                <p className="text-gray-700 text-sm">Close chat</p>
            </div>
            <ReceivedMessage />
            <SentMessage/>
            <div className="flex-1"></div>
            <div className="input" className="text-gray-700 rounded-full bottom-4 fixed mt-4 lg:w-2/3 md:w-2/5 w-4/5">
                <input type="text" className="py-3 px-4 w-full rounded-full flex-1 align-bottom outline-none bg-gray-200" placeholder="Type message..." />
            </div>
        </div>
    )
}

export default ChatBody
