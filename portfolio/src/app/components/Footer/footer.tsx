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
        Copyright © {year}. Ayush Prakash
        </p>
        <div className={styles.social}>
          <Link href='/' className={styles.icons}> <Image src='/github.png' alt='Github' width={32} height={32} className={styles.image} /></Link>
          <Link href='/' className={styles.icons}> <Image src='/twtr.png' alt='Twitter' width={28} height={28} className={styles.image}/></Link>
          <Link href='/' className={styles.icons}> <Image src='/lkdin.png' alt='LinkedIn' width={28} height={28} className={styles.image}/></Link>
          <Link href='/' className={styles.icons}> <Image src='/igram.png' alt='Instagram' width={28} height={28} className={styles.image}/></Link>
        </div>
      </div>
    </div>
  )
}
