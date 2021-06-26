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
        <p>Nous sommes une entreprise qui a un institut japonais, un service informatique
          et une école de piano et de solfège. </p>

        <p> Nous sommes une entreprise qui est très à
          l'écoute et très patiente. Assistance Pédagogie est créée depuis 2019 par Léo KADEM-SAKASEGAWA.
          Notre toute première agence a été fondée en 2019 à FONTENAY-SOUS-BOIS.
        </p>
        <hr />
        Vous souhaitez faire partie de l'académie AAP-fr ?
        <a href="https://docs.google.com/forms/d/1K8jZMQlJG3ecI3CI67iOi6O1P1VNxLKfq_1pttIx9_c/prefill">
          Contactez nous
        </a>

        <a href="/espace-institut-japonais">institut japonais</a>
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
