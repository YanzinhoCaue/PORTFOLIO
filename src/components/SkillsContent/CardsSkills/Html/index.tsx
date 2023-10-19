import Image from "next/image";
import html from '../../../../../public/assets/images/html.png'
import styles from './styles.module.scss'

export function CardHTML() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={html} alt="Logo html" height={80} /></div>
      <h4>HTML</h4>
      <p>Basic structure, Attributes, Links, Images, Lists, Forms, Tables, Semantic HTML, Validation, Accessibility, Frameworks and libraries, Versioning.</p>
    </div>
  );
}