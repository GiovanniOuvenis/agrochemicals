import styles from './page.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/agrochemicals">      
        <h1 className={styles.title}> Agrochemicals</h1>
      </Link> 
      <h1>just another h1</h1>
        <div className={styles.categories}>
          <Link href="agrochemicals/herbicides">
            <h1 className={styles.category}>Herbicides</h1>
            </Link>
            <Link href="agrochemicals/pesticides">
            <h1 className={styles.category}>Pesticides</h1>
            </Link>
            <Link href="agrochemicals/fungicides">
            <h1 className={styles.category}>Fungicides</h1>
            </Link>
        </div>
      
    </main>
  )
}
