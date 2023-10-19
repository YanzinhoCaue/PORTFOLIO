import Image from "next/image";
import reduxjs from '../../../../../public/assets/images/redux.png'
import styles from './styles.module.scss'

export function CardRedux() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={reduxjs} alt="Logo redux" height={80} /></div>
      <h4>Redux.js</h4>
      <p>Store, Reducers, Actions, ActionCreators, Middleware, Connect, Provider, Selectors, DevTools, Combine Reducers, Immutability.</p>
    </div>
  );
}