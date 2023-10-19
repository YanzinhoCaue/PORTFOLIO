import Image from "next/image";
import coreldrawn from '../../../../../public/assets/images/corel.png'
import styles from './styles.module.scss'

export function CardCorelDrawn() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={coreldrawn} alt="Logo coreldraw" height={80} /></div>
      <h4>CorelDraw</h4>
      <p>Interface and tools, Object manipulation, Text editing, Colors and fills, Special effects, Vectorization, Working with pages, Import and export, Workflow and organization, Printing and preparing for output.</p>
    </div>
  );
}