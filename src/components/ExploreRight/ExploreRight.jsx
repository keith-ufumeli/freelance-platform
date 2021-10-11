import { CalendarIcon, ChatAltIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { apiUrl } from '../../utils/apiUrl'
import UserAvatar from '../UserAvatar/UserAvatar'

function ExploreRight() {
    const userSignin = useSelector(state => state.user_login)
    const { userInfo } = userSignin
    const history = useHistory()
    const [user, setUser] = useState()
    const [user_loading, setUserLoading] = useState(false)

    useEffect(()=>{
        setUserLoading(true)
        axios.get(`${apiUrl}/user/single/${userInfo?.user?._id}`).then(res=>{
            setUser(res.data.user)
            setUserLoading(false)
        }).catch(()=>{
            setUserLoading(false)
        })
    },[])


    return (
        <div className="max-w-lg">
            {
                userInfo ? (
                    <div className="w-full flex flex-col">
                        <span onClick={() => history.push('/account')} className="flex flex-row items-center mb-8">
                            {
                                <UserAvatar picture={userInfo?.user?.photoURL} name={userInfo?.user?.displayName} />
                            }
                            <p className="text-gray-700 font-semibold ml-2">My Account</p>
                        </span>
                        {
                            !user?.verified ? (<span onClick={() => history.push('/upgrade')} className="bg-blue-900 text-sm p-2 rounded text-white text-center w-2/3 hover:bg-blue-800 cursor-pointer">Upgrade account</span>) :
                                (<span onClick={() => history.push('/account')} className="bg-blue-900 text-sm p-2 rounded text-white text-center w-2/3 hover:bg-blue-800 cursor-pointer">Edit account</span>)
                        }
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-8">
                            <div className="rounded-full overflow-hidden mr-2">
                                <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-gray-700 font-semibold">You are not logged in</p>
                        </div>
                        <div className="grid items-center w-full border border-gray-200 p-16 content-center rounded">
                            <span onClick={() => history.push('/login')} className="text-center bg-blue-900 text-white p-2 text-sm rounded cursor-pointer hover:bg-blue-800">Login</span>
                        </div>
                    </div>
                )
            }
            {
                user ? (<aside className="hidden lg:block  pt-16">
                    {
                        user_loading ? (<p>loading...</p>) : (
                            <>
                                <h2 className="sr-only">Details</h2>
                                <div className="space-y-5">
                                    <div className="flex items-center space-x-2">
                                        {
                                            user?.verified ? (<>
                                                <BadgeCheckIcon className="h-5 w-5 text-blue-700" aria-hidden="true" />
                                                <span className="text-green-900 text-sm font-medium">Verified Account</span>
                                            </>) : (
                                                <>
                                                    <BadgeCheckIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                    <span className="text-green-900 text-sm font-medium">Free account</span>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="text-gray-900 text-sm font-medium">{user?.contracts?.length} contracts</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <span className="text-gray-900 text-sm font-medium">
                                            Created on - <time dateTime="2020-12-02">{Date(user?.createdAt * 1000).slice(0, 15)}</time>
                                        </span>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </aside>) : null
            }
        </div>
    )
}

export default ExploreRight
