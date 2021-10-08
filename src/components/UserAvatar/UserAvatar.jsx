import React from 'react'
import { Avatar } from "@chakra-ui/react"

function UserAvatar({size, picture, name}) {
    return (
        <div className="flex">
            <Avatar name={name} size={size} src={picture} />
        </div>
    )
}

export default UserAvatar
