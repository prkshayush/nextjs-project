import styles from './page.module.css'
import Projects from './components/projects/page'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>this contains nothing</h1>
      <Projects />
    </div>
  )
}
