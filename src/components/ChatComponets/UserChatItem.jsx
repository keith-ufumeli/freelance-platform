import React from 'react'
import { useDispatch } from 'react-redux'
import { open_chat_Action } from '../../redux/actions/chatActions'
import UserAvatar from '../UserAvatar/UserAvatar'

function UserChatItem() {
    const dispatch = useDispatch()

    const open_chat = () =>{
        dispatch(open_chat_Action())
    }

    return (
        <div onClick={open_chat} className="grid grid-cols-5 border-b gap-2 border-gray-200 p-2 cursor-pointer hover:bg-gray-50 items-center">
            <div className="h-12 w-12 col-span-1 overflow-hidden">
                <UserAvatar />
            </div>
            <div className="col-span-4 flex flex-col justify-center overflow-ellipsis">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-700 font-semibold text-sm">{'sender_name'}</p>
                    <p className="text-xs text-gray-400">2 mins ago</p>
                </div>
                <p className="truncate text-xs text-gray-600">{'message let me see if ot overflows like iwwant it to do by showing 3 dots'}</p>
            </div>
        </div>
    )
}

export default UserChatItem
