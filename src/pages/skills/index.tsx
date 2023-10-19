import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import styles from './styles.module.scss';
import { SkillsContent } from "@/components/SkillsContent";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Yan Cauê</title>
      </Head>
      <main className={styles.contentContainer}>
        <Header />
        <div className={styles.content}>
          <SkillsContent/>
          <Sidebar />
        </div>
        <Background />
      </main>
    </>
  );
}