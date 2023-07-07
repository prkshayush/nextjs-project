import React from 'react'
import styles from './page.module.css'
import Project from '../components/projectComponent/ProjectComponent'

export default function Projects() {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Portfolio</h1>
      <p className={styles.desc}>Some awesome pieces of code & desgin, turned into reality</p>
      <Project />
    </div>//this page is stalled because I cant figure out what projects to add since I have none so if starting over again sart from desgining project component
  )
}
