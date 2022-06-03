import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sim Randomizer</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
      </Head>

      <main className={styles.main}>
        
       <h1>Sim Randomizer</h1>
        
      </main>
    </div>
  )
}

export default Home
