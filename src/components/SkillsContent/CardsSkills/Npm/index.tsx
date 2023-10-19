import Image from "next/image";
import npm from '../../../../../public/assets/images/npm.png'
import styles from './styles.module.scss'

export function CardNPM() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={npm} alt="Logo npm" width={120} /></div>
      <h4>NPM</h4>
      <p>Basic NPM Commands, package.json file, NPM Scripts, Dependency Management, Dependency Versioning, Updating and Fixing Dependencies, Using Global Packages, NPM Configurations, Integration with Frameworks and Build Tools.</p>
    </div>
  );
}