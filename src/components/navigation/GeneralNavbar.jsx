import React, { useState, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import logo from '../../assets/Daypitch_logo.svg'
import {nav_options} from '../../utils/nav_options'
import { useDispatch, useSelector } from 'react-redux'
import UserAvatar from '../UserAvatar/UserAvatar'
import { logout_user } from '../../redux/actions/authActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function GeneralNavbar() {
    const userSignin = useSelector(state=> state.user_login)
    const {userInfo} = userSignin
    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(logout_user())
    }

    return (
        <Disclosure as="nav" className={`bg-white transition duration-500 ease-in-out shadow-sm`}>
                {({ open }) => (
                    <>
                        <nav className=" mx-auto px-2 lg:px-32 md:px-16">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuAlt2Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <Link to='/' className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block h-6 w-auto"
                                            src={logo}
                                            alt="logo"
                                        />
                                    </Link>
                                    <Link to='/explorejobs' className="text-sm flex-shrink-0 md:flex hidden ml-4 text-gray-600 items-center" >Explore jobs</Link>
                                    <Link to='/exploresellers' className="text-sm flex-shrink-0 md:flex hidden ml-4 text-gray-600 items-center" >Explore sellers</Link>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className="hidden sm:flex items-center sm:ml-6">
                                        {
                                            userInfo  ? (
                                                <div className="flex space-x-4">
                                                    {nav_options.BuyerAuthenticatedNavigation.map((item) => (
                                                        <Link to={item.href}
                                                            style={{ transition: "all .15s ease" }}
                                                            key={item.name}
                                                            className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm ')}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            <p>{item.name}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : userInfo?.seller ? (
                                                <div className="flex space-x-4">
                                                    {nav_options.SellerAuthenticatedNavigation.map((item) => (
                                                        <Link to={item.href}
                                                            style={{ transition: "all .15s ease" }}
                                                            key={item.name}
                                                            className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm')}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            <p>{item.name}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex space-x-4">
                                                    {nav_options.navigation.map((item) => (
                                                        <Link to={item.href}
                                                            style={{ transition: "all .15s ease" }}
                                                            key={item.name}
                                                            className={classNames('text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm')}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            <p>{item.name}</p>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <Menu as="div" className="ml-3 relative transition duration-500 ease-in-out">
                                        {({ open }) => (
                                            <>
                                                <div>
                                                    <Menu.Button className="flex text-sm rounded-full focus:outline-none" style={{ transition: "all .15s ease" }}>
                                                        <span className="sr-only">Open user menu</span>
                                                        {
                                                            userInfo ? (
                                                                <>
                                                                   <UserAvatar name={userInfo?.user?.displayName} picture={userInfo?.user?.photoURL} size="sm" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <div className="space-x-4">
                                                                        <Link to='/register' className="bg-yellow-400 hover:bg-yellow-500 md:block hidden py-2 px-4 text-gray-700 rounded-sm">
                                                                            Join community
                                                                        </Link>
                                                                        <Link to='/register' className="bg-yellow-400 hover:bg-yellow-500 md:hidden block py-2 px-4 text-gray-700 rounded-sm">
                                                                            Join
                                                                        </Link>
                                                                    </div>
                                                                </>
                                                            )
                                                        }

                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition duration-150 ease-in-out"
                                                    enterFrom="transition duration-150 ease-in-out transform opacity-0 scale-95"
                                                    enterTo="transition duration-150 ease-in-out transform opacity-100 scale-100"
                                                    leave="transition duration-150 ease-in-out transition ease-in duration-75"
                                                    leaveFrom="transition duration-150 ease-in-out transform opacity-100 scale-100"
                                                    leaveTo="transition duration-150 ease-in-out transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right transition duration-150 ease-in-out absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    >
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to='/account'
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    Account
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to='/profile'
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    Freelance Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to='/upgrade'
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                                    )}
                                                                >
                                                                    Upgrade
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <span onClick={logout}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                                                                    )}
                                                                >
                                                                    Sign out
                                                                </span>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                            </div>
                        </nav>

                        <Disclosure.Panel className="sm:hidden transition duration-150 ease-in-out">
                            {
                                userInfo ? (
                                    <>
                                    <div className="px-2 pt-2 pb-3 space-y-1 shadow-md md:flex hidden flex-col">
                                        {nav_options.BuyerAuthenticatedNavigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1 shadow-md md:hidden flex flex-col">
                                        {nav_options.MobileBuyerAuthenticatedNavigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    </>
                                ) : (
                                    <div className="px-2 pt-2 pb-3 space-y-1 shadow-md md:flex">
                                        {nav_options.navigation.map((item) => (
                                            <Link to={item.href}
                                                key={item.name}
                                                className={classNames('text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base')}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
    )
}

export default GeneralNavbar
