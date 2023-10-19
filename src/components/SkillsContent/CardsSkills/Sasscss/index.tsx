import Image from "next/image";
import scsscss from '../../../../../public/assets/images/sass.png'
import styles from './styles.module.scss'

export function CardScss() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={scsscss} alt="Logo scss" height={80} /></div>
      <h4>Sass</h4>
      <p>Sass Syntax, Variables, Rule Nesting, Mixins, Extensions.</p>
    </div>
  );
}