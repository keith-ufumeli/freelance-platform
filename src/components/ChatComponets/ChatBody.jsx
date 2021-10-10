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
        <div className="flex flex-col w-full">
            <div onClick={close_chat} className="md:hidden flex py-4 mb-2 border-b border-gray-300 flex-row items-center">
                <ArrowLeftIcon height={16} width={16} className='text-gray-700 mr-2' />
                <p className="text-gray-700 text-sm">Close chat</p>
            </div>
            <ReceivedMessage />
            <SentMessage/>
        </div>
    )
}

export default ChatBody
