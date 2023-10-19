import Image from "next/image";
import styledcomponents from '../../../../../public/assets/images/styledcomponents.png'
import styles from './styles.module.scss'

export function CardStyledComponents() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={styledcomponents} alt="Logo styled components" width={120} /></div>
      <h4>Styled Components</h4>
      <p>Component Styling, Property Passing, Global Styles, Pseudo-classes and Pseudo-elements, Themes, Animations and Transitions, Conditional Styling, Integration with other libraries, Development and Debugging, Best Practices, Development Tools.</p>
    </div>
  );
}