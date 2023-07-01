import React from 'react'
import styles from './footer.module.css'

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Copyright © {year}. Ayush <span className={styles.title}>Prakash</span> 
      </div>
      <div className={styles.icons}>
        Social icons
      </div>
    </div>
  )
}
