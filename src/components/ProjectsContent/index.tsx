import { RepositorysList } from '../RepositorysList';
import styles from './styles.module.scss'

export function ProjectsContent() {
  return (
    <section className={styles.container}>
      <h5>My repositorys on Github:</h5>
      <RepositorysList />
    </section>
  );
}