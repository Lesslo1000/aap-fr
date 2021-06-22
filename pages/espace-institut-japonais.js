import Head from 'next/head'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>Espace Institut Japonais - Assistance Pédagogie</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Espace Institut Japonais</h1>
        <h3>Bienvenue dans l'Espace Institut Japonais</h3>
        <Image src="/classe-jp.jpg" width="500px" height="300px" />
        <p>Nous sommes un institut japonais qui propose un service professionel ou non professionnel
          située à FONTENAY-SOUS-BOIS (94). Venez nous tester ou nous adopter !
        </p>
        <a href="/">home</a>

      </main>

      <footer className={styles.footer}>
        Copyright {year} - Assistance Pédagogie - Tous droits réservés
        <div>
          <span>Propulsé par vercel.com
          </span>
        </div>
      </footer>
    </div >
  )
}
