import React from 'react'
import Link from 'next/link'

const links = [
    {
        id: 1,
        title: "Home",
        url: '/'
    },
    {
        id: 2,
        title: "Blog Posts",
        url: '/blog'
    },
    {
        id: 3,
        title: "About",
        url: '/about'
    },
    {
        id: 4,
        title: "Contact",
        url: '/contact'
    },
    {
        id: 5,
        title: "Dashboard",
        url: '/dashboard'
    },
    
]

const Navbar = () => {
  return (
    <div>
        <Link href='/'> AP </Link>
        <div>
            {links.map(link => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar
