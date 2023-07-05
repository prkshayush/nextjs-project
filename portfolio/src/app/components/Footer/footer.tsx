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
          <Link href='/'>Copyright<span className={styles.year}> © {year}. Ayush </span>Prakash </Link>
        </p>
        <div className={styles.social}>
          <Link href='/' className={styles.icons}> <Image src='/github-mark-white.png' alt='Github' width={28} height={28} className={styles.image} /></Link>
          <Link href='/' className={styles.icons}> <Image src='/twtr-light.png' alt='Twitter' width={28} height={28} className={styles.image} /></Link>
          <Link href='/' className={styles.icons}> <Image src='/lkdin-light.png' alt='LinkedIn' width={28} height={28} className={styles.image} /></Link>
          <Link href='/' className={styles.icons}> <Image src='/ig-light.png' alt='Instagram' width={28} height={28} className={styles.image} /></Link>
        </div>
      </div>
    </div>
  )
}
