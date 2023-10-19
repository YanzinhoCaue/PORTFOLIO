import Image from "next/image";
import github from '../../../../../public/assets/images/github.png'
import styles from './styles.module.scss'

export function CardGithub() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={github} alt="Logo github" height={80} /></div>
      <h4>Github</h4>
      <p>Repositories, Pull Requests, Branches, Issues, GitHub Pages, Collaboration, Security, GitHub Actions, Gitignore, Markdown, Integration with Tools, GitHub Commands.</p>
    </div>
  );
}