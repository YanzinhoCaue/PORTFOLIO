import Image from "next/image";
import gitbash from '../../../../../public/assets/images/git.png'
import styles from './styles.module.scss'

export function CardGitbash() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={gitbash} alt="Logo gitbash" height={80} /></div>
      <h4>Gitbash</h4>
      <p>Installation and Configuration, Start a Repository, Clone a Repository, Add and Commit Changes, Update and Synchronize, Branching and Merging, History and Information, Undo and Revert, Working with Remote Repositories.</p>
    </div>
  );
}