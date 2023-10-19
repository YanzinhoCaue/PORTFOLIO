import Image from "next/image";
import tailwind from '../../../../../public/assets/images/tawilwind.png'
import styles from './styles.module.scss'

export function CardTailwind() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={tailwind} alt="Logo tailwind" width={120} /></div>
      <h4>Typescript</h4>
      <p>Class and Utilities, Customization, Responsiveness, Components, Plugin, Build and Optimization, Mobile First.</p>
    </div>
  );
}