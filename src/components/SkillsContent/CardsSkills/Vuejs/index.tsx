import Image from "next/image";
import vuejs from '../../../../../public/assets/images/vue.png'
import styles from './styles.module.scss'

export function CardVue() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={vuejs} alt="Logo vue" height={60} /></div>
      <h4>Vue.js</h4>
      <p>Vue Instance, Directives, Components, Data Binding, Methods and Events, Computed Properties, Instance Lifecycle, Routes, State Management, Reactivity, Transitions and Animations, Custom Directives and Mixins, Development Tools, Vue Ecosystem, Best Practices and Patterns, Vue 3.</p>
    </div>
  );
}