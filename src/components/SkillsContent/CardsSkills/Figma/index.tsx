import Image from "next/image";
import figma from '../../../../../public/assets/images/figma.png'
import styles from './styles.module.scss'

export function CardFigma() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={figma} alt="Logo figma" height={80} /></div>
      <h4>Figma</h4>
      <p>User interface, Vector design, Layers and organization, Groups and components, Prototyping, Collaboration, Responsive design, Libraries and styles, Plugins, Export.</p>
    </div>
  );
}