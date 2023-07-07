import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          <Link href='/' className={styles.titleLink}>Copyright<span className={styles.year}> © {year}. Ayush </span>Prakash </Link>
        </p>
        <div className={styles.social}>
          <Link href='https://github.com/prkshayush' className={styles.icons}> <Image src='/github-mark-white.png' alt='Github' width={32} height={32} className={styles.image} /></Link>
          <Link href='https://twitter.com/maybenot_ap' className={styles.icons}> <Image src='/twtr-light.png' alt='Twitter' width={32} height={32} className={styles.image} /></Link>
          <Link href='https://www.linkedin.com/in/ayush-prakash-8a3320224/' className={styles.icons}> <Image src='/lkdin-light.png' alt='LinkedIn' width={32} height={32} className={styles.image} /></Link>
          <Link href='https://www.instagram.com/prksh_ayush/' className={styles.icons}> <Image src='/ig-light.png' alt='Instagram' width={32} height={32} className={styles.image} /></Link>
        </div>
      </div>
    </div>
  )
}
