import { RepositorysList } from '../RepositorysList';
import styles from './styles.module.scss'
interface RepositoryListProps {
    name: string;
    full_name: string,
    html_url: string,
}

export function ProjectsContent(props: RepositoryListProps) {
  return (
    <section className={styles.container}>
      <h5>My repositorys on Github:</h5>
      <RepositorysList />
    </section>
  );
}