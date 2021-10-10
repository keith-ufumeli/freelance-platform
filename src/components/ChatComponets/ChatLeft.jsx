import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_user_chats_Action } from '../../redux/actions/chatActions'
import UserChatItem from './UserChatItem'

function ChatLeft() {

    const _user = useSelector(state => state.user_login)
    const _chats = useSelector(state => state.get_all_chats)
    const { chats } = _chats
    const dispatch = useDispatch()

    const { userInfo } = _user
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(get_all_user_chats_Action(userInfo?.token))
    }, [dispatch])

    console.log(chats)

    return (
        <div className="flex flex-col w-full ">
            {
                chats?.map((chat, index) => (
                    <Fragment key={index}>
                        <UserChatItem
                            time={chat.createdAt}
                            picture={chat.user_picture}
                            message={chat.last_message}
                            username={chat.message_username}
                            not_sent_by_you={chat.sent_by_you}
                        />
                    </Fragment>
                ))
            }
        </div>
    )
}

export default ChatLeft
