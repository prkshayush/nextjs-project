import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h1 className={styles.title}>Full Stack Developer & Web3 enthusiast</h1>
          <h4 className={styles.desc}>Hey there! I'm Ayush Prakash. A proficient Full Stack Developer, learning & exploring Web3.
            <br />Currently I'm an undegrad at Birla Institute of Technology, Mesra, India
          </h4>
        </div>
        <div className={styles.items}>
          <Image src='/image.jpg' alt='' width={100} height={500} className={styles.img} />
        </div>
      </div>
    </>
  )
}
