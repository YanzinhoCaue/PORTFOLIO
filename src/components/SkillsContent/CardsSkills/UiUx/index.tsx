import Image from "next/image";
import uiux from '../../../../../public/assets/images/uiux.png'
import styles from './styles.module.scss'

export function CardUiUx() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={uiux} alt="Logo uiux" width={120} /></div>
      <h4>Designer</h4>
      <p>Design Principles, Typography, Colors, Layout and Composition, Icons and Graphic Elements, User Research, Information Architecture, Wireframing and Prototyping, User-Centered Design, Accessibility, Responsive Design, User Psychology.</p>
    </div>
  );
}