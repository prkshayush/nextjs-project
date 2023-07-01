import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className={styles.container}>
        Copyright © {year}. Ayush Prakash
      <div className={styles.social}>
        <Link href='https://github.com/prkshayush' className={styles.icons}><Image src='/github.png' alt='Github' width={20} height={20}/></Link>
        <Link href='https://www.linkedin.com/in/ayush-prakash-8a3320224/' className={styles.icons}><Image src='/linkedin.png' alt='Github' width={20} height={20}/></Link>
        <Link href='https://twitter.com/maybenot_ap' className={styles.icons}><Image src='/twitter.png' alt='Github' width={20} height={20}/></Link>
        <Link href='https://www.instagram.com/prksh_ayush/' className={styles.icons}><Image src='/ig.png' alt='Github' width={20} height={20}/></Link>
        
      </div>
    </div>
  )
}
