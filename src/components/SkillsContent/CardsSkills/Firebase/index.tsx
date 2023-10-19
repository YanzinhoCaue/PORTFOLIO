import Image from "next/image";
import firebase from '../../../../../public/assets/images/firebase.png'
import styles from './styles.module.scss'

export function CardFirebase() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={firebase} alt="Logo firebase" height={80} /></div>
      <h4>Firebase</h4>
      <p>Authentication, Real-time Database, Firestore, Cloud Storage, Cloud Functions, Real-time notifications, Analytics, Test Lab, Error tracking, Hosting, Authentication with Google services, Database security and rules, Integrations with other tools and services.</p>
    </div>
  );
}