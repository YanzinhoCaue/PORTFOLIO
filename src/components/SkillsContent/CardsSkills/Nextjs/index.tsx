import Image from "next/image";
import nextjs from '../../../../../public/assets/images/nextjs.png'
import styles from './styles.module.scss'

export function CardNext() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={nextjs} alt="Logo next" height={80} /></div>
      <h4>Next.js</h4>
      <p>Routing, Styles and CSS, APIs and HTTP requests, Server-Side Rendering (SSR) and Static Site Generation (SSG), API Routes, Deploying, Performance Optimization, Unit Testing, Security.</p>
    </div>
  );
}