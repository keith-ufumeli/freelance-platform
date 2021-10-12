import { ChatAlt2Icon } from '@heroicons/react/outline'
import NavbarNotification from '../components/navigation/NavbarNotification'

export const nav_options = {
  navigation: [
    { name: 'About', href: '/howitworks', current: false },
    { name: 'Sign In', href: '/login', current: false },
  ],

  SellerAuthenticatedNavigation: [
    { name: 'Messages', href: '/chat', current: true },
    { name: 'My Listings', href: '/myjobs', current: true },

  ],

  BuyerAuthenticatedNavigation: [
    { name: 'My Listings', href: '/myjobs', current: true },
    { name: <ChatAlt2Icon height={20} width={20} className="text-gray-700" />, href: '/chat/?', current: true },
    {
      name: <span>
        <NavbarNotification />
      </span>, current: true
    }
    // { name: 'Messages', href: '/chat', current: false },
  ],
  MobileBuyerAuthenticatedNavigation: [
    { name: 'Explore Sellers', href: '/exploresellers', current: false },
    { name: 'Explore Jobs', href: '/explorejobs', current: true },
    { name: 'My Listings', href: '/myjobs', current: true },
    {
      name: <div className="flex flex-row items-center">
        <ChatAlt2Icon height={20} width={20} className="text-gray-700" />
        <p className="text-gray-700 font-semibold ml-2">My Chats</p>
      </div>, href: '/chat/?', current: true
    },
    {
      name: <span className="flex flex-row items-center">
        <NavbarNotification />
        <p className="text-gray-700 font-semibold ml-2">Notifications</p>
      </span>, current: true
    }
    // { name: 'Messages', href: '/chat', current: false }
  ]
}