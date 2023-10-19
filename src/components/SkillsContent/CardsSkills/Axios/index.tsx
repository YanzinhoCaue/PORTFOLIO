import Image from "next/image";
import axios from '../../../../../public/assets/images/axios.png'
import styles from './styles.module.scss'

export function CardAxios() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={axios} alt="Logo axios" width={160} /></div>
      <h4>Axios</h4>
      <p>Installation, Import, Perform Requests, Configuration, Response Handling, Interceptors, Request Cancellation, Error Handling, Testing, Integration with Frameworks, Security, Documentation.</p>
    </div>
  );
}