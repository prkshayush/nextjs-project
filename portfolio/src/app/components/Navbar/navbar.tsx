import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'

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
    title: "About",
    url: '/about'
  },
  {
    id: 4,
    title: "Contact",
    url: '/contact'
  },
]


export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/logo-dark.png' alt='Logo' width={75} height={75} className={styles.img} />
      </Link>
      <div className={styles.links}>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}
