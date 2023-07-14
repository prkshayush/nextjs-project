import Button from './components/button/Button'
import TechStack from './components/techstack/TechStack'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between gap-x-32 my-14">
        <div className="flex-1 flex items-center flex-col cursor-pointer gap-10">
          <h1 className={styles.title}>Tech Enthusiast interested in Music & Sports</h1>
          <h4 className="text-xl font-normal text-justify">Hey! 👋 I'm <span className={styles.name}>Ayush Prakash</span>. I'm interested in Tech, Music, Sports & Adventure. I'm a software developer experienced with Front-End | Backend, learning & exploring Web3 & CI/CD.
          <br />Here's my Tech Stack 👇
          <TechStack />
          </h4>
        <Button text='See my work' url='/projects' />
        </div>
        <div className="flex-1 flex items-center flex-col cursor-pointer gap-10">
          <div className={styles.imgContainer}><Image src='/image.jpg' alt='' width={420} height={420} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className={styles.img} />
          </div>
        </div>
      </div>
    </>
  )
}
