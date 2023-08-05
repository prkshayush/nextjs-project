'use client'

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Menu from '../menu/Menu'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: "Home",
    url: '/',
  },
  {
    id: 2,
    title: "Projects",
    url: '/projects'
  },
  {
    id: 3,
    title: "Blogs",
    url: '/blogs'
  },
  {
    id: 4,
    title: "About",
    url: '/about'
  },
  {
    id: 5,
    title: "Contact",
    url: '/contact'
  },
  {
    id: 6,
    title: "Dashboard",
    url: '/dashboard'
  }
]


export default function Navbar() {
  const session = useSession()
  return (
    <div className='flex justify-between items-center py-2 lg:py-0 fixed w-full bg-dark text-light drop-shadow-3xl z-[100]'>
      <Link href='/' className="mx-12 lg:mx-6">
        <Image src='/logo-dark.png' alt='Logo' width={75} height={75} className="priortiy" />
      </Link>
      <Menu />
      <div className="flex items-center gap-5 mx-12 lg:hidden">
        {links.map(link => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        {
          session.status === "authenticated" && (<button name='logout' className='p-2 bg-teal-700 rounded-xl text-sm hover:bg-teal-600 ease transition-all text-slate-100' onClick={signOut}>
          LogOut
        </button>)
        }
       
      </div>
    </div>
  )
}
