import Button from './components/button/Button'
import TechStack from './components/techstack/TechStack'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title}>Tech Enthusiast interested in Music & Sports</h1>
          <h4 className={styles.desc}>Hey! 👋 I'm <span className={styles.name}>Ayush Prakash</span>. I'm interested in Tech, Music, Sports & Adventure. I'm a software developer experienced with Front-End | Backend, learning & exploring Web3 & CI/CD.
          <br />Here's my Tech Stack 👇
          <TechStack />
          </h4>
        <Button text='See my work' url='/projects' />
        </div>
        <div className={styles.items}>
          <Image src='/image.jpg' alt='' width={420} height={420} className={styles.img} />
        </div>
      </div>
    </>
  )
}
