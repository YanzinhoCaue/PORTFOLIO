import Image from "next/image";
import bulma from '../../../../../public/assets/images/bulma.png'
import styles from './styles.module.scss'

export function CardBulma() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={bulma} alt="Logo bulma" height={80} /></div>
      <h4>Bulma</h4>
      <p>Basic Structure, Typography, Components, Responsiveness, Modifiers, Utility Classes, Extensions, JavaScript Integration, Customization, Best Practices.</p>
    </div>
  );
}