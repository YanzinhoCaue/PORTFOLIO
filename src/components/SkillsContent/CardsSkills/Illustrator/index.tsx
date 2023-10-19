import Image from "next/image";
import illustrator from '../../../../../public/assets/images/illustrator.png'
import styles from './styles.module.scss'

export function CardIllustrator() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={illustrator} alt="Logo illustrator" height={80} /></div>
      <h4>Illustrator</h4>
      <p>User Interface and Tools, Shape Creation, Text Manipulation, Illustration Creation, Working with Layers, Colors and Fills, Effects and Graphic Styles, Clippings and Masks, File Export, Automation with Actions, Working with Typography, Design Concepts Graphic.</p>
    </div>
  );
}