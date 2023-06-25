"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'


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
        <div className={styles.container}>
                <Link href='/' className={styles.logo}> AP </Link>
                <div className={styles.links}>
                    {links.map(link => (
                        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                    ))}
                    <button className={styles.logout} onClick={() => {
                        console.log("Logged Out")
                    }}>Logout</button>
                </div>
        </div>

    )
}

export default Navbar
