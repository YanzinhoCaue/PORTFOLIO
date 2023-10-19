import Image from "next/image";
import rubyonrails from '../../../../../public/assets/images/rubyrails.png'
import styles from './styles.module.scss'

export function CardRubyOnRails() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={rubyonrails} alt="Logo ruby on rails" width={120} /></div>
      <h4>Ruby on Rails</h4>
      <p>Ruby, MVC, Rails Framework, Database Management, Routes, Controllers, Models, Views, Forms and Validation, Authentication and Authorization, Testing, Gems, Deploy, Security, Code Best Practices and Standards, Code Versioning.</p>
    </div>
  );
}