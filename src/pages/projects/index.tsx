import { Header } from "@/components/Header";
import Head from "next/head";
import styles from './styles.module.scss';
import { Background } from "@/components/Background";
import { Sidebar } from "@/components/Sidebar";
import { ProjectsContent } from "@/components/ProjectsContent";


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Yan Cauê</title>
      </Head>
      <main className={styles.contentContainer}>
        <Header />
        <div className={styles.content}>
          <ProjectsContent />
          <Sidebar />
        </div>
        <Background />
      </main>
    </>
  );
}