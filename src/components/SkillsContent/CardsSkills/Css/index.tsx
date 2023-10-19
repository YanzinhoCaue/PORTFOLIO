import Image from "next/image";
import css from '../../../../../public/assets/images/css.png'
import styles from './styles.module.scss'

export function CardCSS() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={css} alt="Logo css" height={80} /></div>
      <h4>CSS</h4>
      <p>Selectors, CSS Properties, Box Model, Layout, Responsiveness, Fonts, Colors, Pseudo-classes and pseudo-elements, Transitions and animations, Style Precedence, Organization and Maintenance, Cross-browser compatibility, Development Tools.</p>
    </div>
  );
}