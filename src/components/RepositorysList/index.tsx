import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

export function RepositorysList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/YanzinhoCaue/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <div className={styles.container}>  
      <ul>
        {repositories.map(repository => <RepositoryItem repository={repository} />)}
      </ul>
    </div>
  );
}
