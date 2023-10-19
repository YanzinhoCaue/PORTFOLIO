import Image from "next/image";
import jqueryjs from '../../../../../public/assets/images/jquery.png'
import styles from './styles.module.scss'

export function CardJQuery() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={jqueryjs} alt="Logo jquery" height={80} /></div>
      <h4>jQuery.js</h4>
      <p>Selectors, DOM manipulation, Events, Animations, Ajax Requests, Visual effects, Plugins, Performance.</p>
    </div>
  );
}