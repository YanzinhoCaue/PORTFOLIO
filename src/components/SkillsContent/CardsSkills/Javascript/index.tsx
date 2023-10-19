import Image from "next/image";
import javascript from '../../../../../public/assets/images/javascript.png'
import styles from './styles.module.scss'

export function CardJavascript() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={javascript} alt="Logo javascript" height={80} /></div>
      <h4>Javascript</h4>
      <p>Basic Syntax, Functions, Objects and Properties, Arrays, Events, DOM (Document Object Model), AJAX, Promises and Async/Await, Closure and Scope, ES6+, Frameworks and Libraries, Development Tools, Testing and Debugging, Security, Management Packages, ESNext Basics.</p>
    </div>
  );
}