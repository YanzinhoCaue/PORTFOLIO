import Image from "next/image";
import aws from '../../../../../public/assets/images/aws.png'
import styles from './styles.module.scss'

export function CardAWS() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={aws} alt="Logo AWS" width={120} /></div>
      <h4>Amazon Web Service</h4>
      <p>Cloud Fundamentals, AWS Core Services, Account Management and Security, Network Services, Storage, Database Services, Cloud Computing and Containers, Cloud Computing and Containers, Application Management, Data Analytics and Machine Learning, Automation and Orchestration, DevOps on AWS, Security and Compliance, Practical Experience.</p>
    </div>
  );
}