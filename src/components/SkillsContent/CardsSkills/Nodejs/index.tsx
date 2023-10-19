import Image from "next/image";
import nodejs from '../../../../../public/assets/images/nodejs.png'
import styles from './styles.module.scss'

export function CardNode() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={nodejs} alt="Logo node" height={80} /></div>
      <h4>Node.js</h4>
      <p>Modules, NPM, Server Development, Handling HTTP Requests and Responses, APIs, Database, Authentication and Security, Error Management, Deployment, Debugging, WebSockets.</p>
    </div>
  );
}