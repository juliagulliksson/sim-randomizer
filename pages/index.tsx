import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Personality from '../components/Personality'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sim Randomizer</title>
      <meta name="description" content="Randomize sim personality for The Sims 2" />
      </Head>

      <main className={styles.main}>
        
       <h1>Sim Randomizer</h1>
        
      </main>

      <Personality />
    </div>
  )
}

export default Home
