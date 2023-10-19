import Image from "next/image";
import notion from '../../../../../public/assets/images/notion.png'
import styles from './styles.module.scss'

export function CardNotion() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={notion} alt="Logo notion" height={80} /></div>
      <h4>Notion</h4>
      <p>Basics of navigation, Organization of information, Use of Blocks, Collaboration, Personalization, Task and Project Management, Knowledge Management, Automation, Advanced use, Mobile.</p>
    </div>
  );
}