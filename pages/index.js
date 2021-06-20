import Head from 'next/head'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Assistance Pédagogie</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Assistance Pédagogie</h1>
        <h3>Bienvenue sur notre site internet !</h3>
        <Image src="/background.jpg" width="500px" height="300px" />
        <p>Nous sommes une entreprise qui a un institut japonais, un service informatique
          et une école de piano et de solfège.
        </p>
      </main>

      <footer className={styles.footer}>
        Copyright {year} - Assistance Pédagogie - Tous droits réservés
        <div>
          <span>Propulsé par Vercel
          </span>
        </div>
      </footer>
    </div>
  )
}
