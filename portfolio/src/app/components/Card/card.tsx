import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
// import Image from 'next/image'

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>
            <h1 className={styles.title}>Ayush Prakash</h1>
            <h4 className={styles.desc}>Full Stack developer</h4>
            <p className={styles.lang}>Solidity, NextJS, Python, Go</p>
        </div>
        <div className={styles.back}>
            <h1 className={styles.title}>Don't be shy! Hit me up @</h1>
            <p className={styles.desc}>itsnotmymailid140@gmail.com</p>
            {/* <Link href='#' className={styles.link}></Link>
            <Link href='#' className={styles.link}></Link> */}
        </div>
      </div>
    </div>
  )
}
