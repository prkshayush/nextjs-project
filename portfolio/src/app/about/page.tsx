import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function About() {
  return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src='/about-img.png' alt='' width={600} height={400} className={styles.img} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.item}>About Me</h1>
          <h3><span className={styles.title}>Hi, I'm Ayush,</span> passionate web-developer from India</h3>
          <p className={styles.desc}><span className={styles.description}>As a junior developer, I possess an impressive arsenal of skills in JS, Python, Go & Solidity</span>
            <br /> Additionally, I excel in NextJs, ReactJs for designing and maintaining responsive websites that offer a smooth user experience. Currently, I'm learning & exploring Web3 technologies and backend development. I have some cool projects, <Link href='/projects'><span className={styles.project}>check them out.</span></Link> section. I love to collab with people on various projects as it gives me the opportunity to learn & enhance my knowledge.
          </p>
          <div className={styles.education}>
            <h1 className={styles.item}>Education</h1>
            <h3 className={styles.title}>Bachelor of Technology</h3>
            <h3 className={styles.description}>2021-2025 | BIT Mesra, India</h3>
            <p className={styles.desc}>Pursuing a degree with majors in Chemical Engineering & minors in Python
            </p>
          </div>
        <Button url='/' text='Resume' />
        </div>
      </div>

  )
}
