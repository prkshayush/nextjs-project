import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'
import Button from '../button/Button'

export default function Card() {
  return (
    <div className={styles.container}>
      <article className={styles.profile}>
        <div className={styles.image}><Image src='/image.jpg' alt='profile-img' width={100} height={100} /></div>
        <h2 className={styles.title}>Ayush Prakash</h2>
        <small className={styles.userHandle}>@prksh_ayush</small>
        <div className={styles.profileButton}>
            <Button url='/' text='Resume' />
        </div>
        <div className={styles.profileIcon}>
            <Link href='#'><Image src='/github-mark-white.png' alt='' width={20} height={20} /></Link> 
        </div>
      </article>
    </div>
  )
}
