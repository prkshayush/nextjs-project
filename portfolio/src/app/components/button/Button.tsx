import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

type ButtonProps = {
  text: string,
  url: string
}

const Button = ({text, url}: ButtonProps) => {
  return (
    <div>
      <Link href={url}>
      <button className={styles.button}>
        <span className={styles.buttonContent}>{text}</span>
      </button>
      </Link>
    </div>
  )
}

export default Button

