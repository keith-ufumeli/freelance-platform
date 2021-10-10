import NavbarNotification from '../components/navigation/NavbarNotification'

export const nav_options = {
    navigation : [
        { name: 'About', href: '/howitworks', current: false },
        { name: 'Sign In', href: '/login', current: false },
      ],
      
    SellerAuthenticatedNavigation : [
        { name: 'Messages', href: '/chat', current: true },
        { name: 'My Jobs', href: '/myjobs', current: true },
      
      ],
      
    BuyerAuthenticatedNavigation : [
        { name: 'My Jobs', href: '/myjobs', current: true },
        // { name: <ChatAlt2Icon height={20} width={20} className="text-gray-700" />, href: '/chat', current: true },
        { name: <span>
                <NavbarNotification/>
          </span>, current: true }
        // { name: 'Messages', href: '/chat', current: false },
    ],
    MobileBuyerAuthenticatedNavigation:[
      { name: 'Explore Sellers', href: '/exploresellers', current: false },
        { name: 'Explore Jobs', href: '/explorejobs', current: true },
        { name: 'My Jobs', href: '/myjobs', current: true },
        // { name: <ChatAlt2Icon height={20} width={20} className="text-gray-700" />, href: '/chat', current: true },
        { name: <span>
                <NavbarNotification/>
          </span>, current: true }
        // { name: 'Messages', href: '/chat', current: false }
    ]
}