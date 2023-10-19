import Image from "next/image";
import photoshop from '../../../../../public/assets/images/photoshop.png'
import styles from './styles.module.scss'

export function CardPhotoshop() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={photoshop} alt="Logo photoshop" height={80} /></div>
      <h4>Photoshop</h4>
      <p>Interface, Basic image editing, Layers, Selections, Photo retouching, Non-destructive editing, Drawing tools, Filters and effects, Working with colors, Cropping tools, Image manipulation, Automation, Save and export.</p>
    </div>
  );
}