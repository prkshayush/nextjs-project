import styles from './page.module.css'
import Projects from './components/projects/page'

export default function Home() {
  return (
    <div className='container'>
      <h1>This is the homepage</h1>
      <Projects />
    </div>
  )
}
