import Image from "next/image";
import mysql from '../../../../../public/assets/images/mysql.png'
import styles from './styles.module.scss'

export function CardMySql() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={mysql} alt="Logo mysql" height={80} /></div>
      <h4>MySql</h4>
      <p>Installation and configuration, Structured Query Language, Database schema, Data management, Advanced queries, Transactions, Performance optimization, Security, Backup and restore, Tools and interfaces, Integration with programming languages, Administration and maintenance.</p>
    </div>
  );
}