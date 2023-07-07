import React from 'react'
import styles from './page.module.css'
import Button from '../components/button/Button'
import Card from '../components/card/Card'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <h3 className={styles.desc}>Wanna connect? Send a message!!</h3>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Card />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="email" placeholder='E-mail' className={styles.input} />
          <textarea name="message" placeholder='Message' className={styles.textarea} cols='30' rows="10"></textarea>
          <div className={styles.button}><Button text='Send' url='/' /></div>
        </form>
      </div>
    </div>
  )
}
