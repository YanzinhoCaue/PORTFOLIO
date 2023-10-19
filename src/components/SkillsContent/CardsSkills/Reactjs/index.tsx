import Image from "next/image";
import reactjs from '../../../../../public/assets/images/reactjs.png'
import styles from './styles.module.scss'

export function CardReactJs() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={reactjs} alt="Logo react" height={80} /></div>
      <h4>React.js</h4>
      <p>Componentization, State and Properties, Component Lifecycle, State Management, Routing, Network Requests, Styling, Development Tools, Best Practices and Standards, Forms Management, Unit Testing, Integration with API and Servers, Deployment.</p>
    </div>
  );
}