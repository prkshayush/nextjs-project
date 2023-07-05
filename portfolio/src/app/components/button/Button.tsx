import React from 'react'
import styles from './page.module.css'

export default function Button() {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => {}}>
        Resume
      </button>
    </div>
  )
}
