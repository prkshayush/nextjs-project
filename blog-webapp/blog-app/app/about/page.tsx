import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
        <p>
            This is the about section of this website
        </p>
      <div>This will be a link to my portfolio website</div>
      <button>
        <Link href='/'>Go to Home</Link>
      </button>
    </div>
  )
}
