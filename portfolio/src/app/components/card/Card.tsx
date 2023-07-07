import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'
import Button from '../button/Button'

export default function Card() {
  const links = [
    {
      id: 1,
      url: 'https://github.com/prkshayush',
      img: '/github-mark-white.png'
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/in/ayush-prakash-8a3320224/',
      img: '/linkedin-dark.png'
    },
    {
      id: 3,
      url: 'https://twitter.com/maybenot_ap',
      img: '/twitter-dark.png'
    },
    {
      id: 4,
      url: 'https://www.instagram.com/prksh_ayush/',
      img: '/insta.png'
    },
  ]
  return (
    <div className={styles.container}>
      <article className={styles.profile}>
        <div className={styles.image}><Image src='/image.jpg' alt='profile-img' width={100} height={100} /></div>
        <h2 className={styles.title}>Ayush Prakash</h2>
        <Link href='https://www.threads.net/@prksh_ayush' className={styles.userHandle}>@prksh_ayush</Link>
        <div className={styles.profileButton}>
          <Button url='/' text='Resume' />
        </div>
        <div className={styles.profileIcon}>
          {
            links.map(link => (
              <Link key={link.id} href={link.url} className={styles.socials}>
                <Image src={link.img} alt='Icon8-Pack' width={25} height={25} />
              </Link>
            ))
          }
        </div>
      </article>
    </div>
  )
}
