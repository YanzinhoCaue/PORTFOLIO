import Head from 'next/head'
import styles from './home.module.scss'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Background } from '@/components/Background'
import { HomeContent } from '@/components/HomeContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Yan Cauê</title>
        <meta name="description" content="This is the portfolio of Yan Cauê!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.contentContainer}>
        <Header />
        <div className={styles.content}>
          <HomeContent />
          <Sidebar />
        </div>
        <Background />
      </main>
    </>
  )
}
