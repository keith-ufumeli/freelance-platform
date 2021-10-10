import React from 'react'
import UserChatItem from './UserChatItem'

function ChatLeft() {
    return (
        <div className="flex flex-col w-full ">
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
            <UserChatItem />
        </div>
    )
}

export default ChatLeft
