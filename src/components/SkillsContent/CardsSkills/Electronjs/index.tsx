import Image from "next/image";
import electron from '../../../../../public/assets/images/electron.png'
import styles from './styles.module.scss'

export function CardElectron() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={electron} alt="Logo electron" height={80} /></div>
      <h4>Electron</h4>
      <p>Electron API, Project structure, Inter-process communication, Packaging and distribution, Security, Debugging and testing.</p>
    </div>
  );
}