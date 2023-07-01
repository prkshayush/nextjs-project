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
    url: '#projects'
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
      <div className={styles.imgContainer}>
        <Image src='/logo.png' alt='Logo' width={50} height={50} className={styles.img} />
      </div>
      <div className={styles.buttons}>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}
