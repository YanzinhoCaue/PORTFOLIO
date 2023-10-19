import Image from "next/image";
import angularjs from '../../../../../public/assets/images/angular.png'
import styles from './styles.module.scss'

export function CardAngular() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={angularjs} alt="Logo angularjs" height={80} /></div>
      <h4>Angular.js</h4>
      <p>Components, Directives, Modules, Services, Routes, Forms, Communication with the server, State management, Testing, Tools and development environment, Good practices and coding standards, Security, Understanding the Angular architecture.</p>
    </div>
  );
}