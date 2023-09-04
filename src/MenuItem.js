import {BiSolidHomeAlt2} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiBriefcase} from 'react-icons/bi'
import {BiSolidContact} from 'react-icons/bi'

export const MenuItem = [
    {
         title: 'Home',
         url: '/',
         cName: 'nav-link',
         icon: <BiSolidHomeAlt2 />
    },

    {
        title: 'About',
        url: '/about',
        cName: 'nav-link',
        icon: <BiUserCircle />
   },

   {
    title: 'Services',
    url: '/services',
    cName: 'nav-link',
    icon: <BiBriefcase />
},

{
    title: 'Contact',
    url: '/contact',
    cName: 'nav-link',
    icon: <BiSolidContact />
},

{
    title: 'Sign Up',
    url: '/signup',
    cName: 'nav-link-mobile',
},
]