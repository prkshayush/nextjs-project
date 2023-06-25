import React from 'react'
import styles from './footer.module.css'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>{year} © Ayush Prakash </div>
      <div></div>
    </div>
  )
}

export default Footer
