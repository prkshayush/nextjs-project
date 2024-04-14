import About from './components/about/page'
import Button from './components/button/Button'
import TechStack from './components/techstack/TechStack'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="items-center justify-between gap-x-32 my-14 3xl:flex 2xl:flex lg:flex-col xl:gap-20">
        <div className="flex-1 flex items-center flex-col cursor-pointer gap-10 xs:gap-2">
          <h1 className='text-[65px] font-bold bg-gradient-to-b from-[#a600ff] to-[#00c3ff] bg-clip-text text-transparent'>Hello there! </h1>
          <h4 className="text-xl font-normal text-justify sm:text-base">I'm <span className='hover:text-light-blue transition-all delay-75'>Ayush Prakash👋</span>. I'm interested in Tech, Music, Sports & Adventure. I'm a self-taught developer experienced with Front-End | Backend, learning & exploring Machine Learning & CI/CD.
            <br />Here's my Tech Stack 👇
          </h4>
          <TechStack />
          <Button text='See my work' url='/projects' />
        </div>
        <div className="flex-1 flex items-center flex-col cursor-pointer gap-10">
          <div className={styles.imgContainer}><Image src='/image.jpg' alt='' width={420} height={420} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className={styles.img} />
          </div>
        </div>
      </div>
      <div className='p-10'>
        <About />
      </div>
    </main>
  )
}
