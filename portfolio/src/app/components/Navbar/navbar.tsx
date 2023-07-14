'use client'

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Menu from '../menu/Menu'

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
    url: '/blog'
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
]


export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/logo-dark.png' alt='Logo' width={75} height={75} className={styles.img} />
      </Link><Menu />
      <div className={styles.links}>
       
        {links.map(link => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
 
      </div>
    </div>
  )
}
