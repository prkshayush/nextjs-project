import React from 'react'
import styles from './styles.module.css'

export default function Loader() {
    return (
    <div className={styles.bar}>
        <div className={styles.ball}></div>
    </div>
    )
}
