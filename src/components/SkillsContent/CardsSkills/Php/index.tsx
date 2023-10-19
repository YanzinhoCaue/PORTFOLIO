import Image from "next/image";
import php from '../../../../../public/assets/images/php.png'
import styles from './styles.module.scss'

export function CardPHP() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={php} alt="Logo php" height={80} /></div>
      <h4>PHP</h4>
      <p>Basic Syntax, Functions, Arrays, Strings, Forms, File Manipulation, Database, Object Orientation, Error Handling, Session and Cookies Management, Libraries and Frameworks, APIs and Web Services, Development Tools.</p>
    </div>
  );
}