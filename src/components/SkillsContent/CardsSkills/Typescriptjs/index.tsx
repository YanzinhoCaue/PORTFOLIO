import Image from "next/image";
import typescript from '../../../../../public/assets/images/typescript.png'
import styles from './styles.module.scss'

export function CardTypescript() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={typescript} alt="Logo typescript" height={80} /></div>
      <h4>Typescript</h4>
      <p>Data Types, Variable Declaration, Interfaces and Types, Type Annotations, Classes and OOP, Modules and Namespaces, Type Inference, Generic Functions, Decorations, Compilation and Configuration, Development Environment, JavaScript Integration, Error Handling, Good Practices , Tests, Libraries and Frameworks.</p>
    </div>
  );
}