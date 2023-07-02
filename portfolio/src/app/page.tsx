import styles from './page.module.css'
import Projects from './components/projects/page'

export default function Home() {
  return (
    <div className='container'>
      <h1>Full Stack Developer & Web3 enthusiast</h1>
      <h4>Hey there! I'm Ayush Prakash. A proficient Full Stack Developer, learning & exploring Web3.</h4>
      <p>Currently I'm an undegrad at Birla Institute of Technology, Mesra, India</p>
      <div>
        Tech Stack |
        <div></div>
      </div>
      <Projects />
    </div>
  )
}
