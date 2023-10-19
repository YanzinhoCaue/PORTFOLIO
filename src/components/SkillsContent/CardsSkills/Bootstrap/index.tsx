import Image from "next/image";
import bootstrap from '../../../../../public/assets/images/bootstrap.png'
import styles from './styles.module.scss'

export function CardBootstrap() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={bootstrap} alt="Logo bootstrap" height={80} /></div>
      <h4>Bootstrap</h4>
      <p>Grid System, Components and Styles, Responsiveness, Customization, Integration with JavaScript, Accessibility, Advanced features, Practice and Projects.</p>
    </div>
  );
}