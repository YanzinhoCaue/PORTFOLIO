import { Header } from "@/components/Header";
import Head from "next/head";
import styles from './styles.module.scss';
import { Background } from "@/components/Background";
import { Sidebar } from "@/components/Sidebar";
import { AboutContent } from "@/components/AboutContent";


export default function About() {
  return (
    <>
      <Head>
        <title>About | Yan Cauê</title>
      </Head>
      <main className={styles.contentContainer}>
        <Header />
        <div className={styles.content}>
          <AboutContent />
          <Sidebar />
        </div>
        <Background />
      </main>
    </>
  );
}