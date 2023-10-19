import Image from "next/image";
import yarn from '../../../../../public/assets/images/yarn.png'
import styles from './styles.module.scss'

export function CardYarn() {
  return (
    <div className={styles.cardSkill}>
      <Image src={yarn} alt="Logo yarn" height={80} />
      <h4>Yarn</h4>
      <p>Starting a Yarn Project, Dependency Management, Installing Dependencies, Lock Files, Workspaces, Custom Scripts, Advanced Commands, Yarn Configuration, Version Management, integration with other Tools.</p>
    </div>
  );
}