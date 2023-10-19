import Image from "next/image";
import docker from '../../../../../public/assets/images/docker.png'
import styles from './styles.module.scss'

export function CardDocker() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={docker} alt="Logo docker" height={80} /></div>
      <h4>Docker</h4>
      <p>Containers, Docker Engine, Docker CLI, Installation, Docker Images, Application Containerization, Docker Networking, Orchestration, Container Composition, Security, Monitoring and Management, Continuous Integration and Continuous Deployment (CI/CD), Troubleshooting, Updates and Maintenance Practices.</p>
    </div>
  );
}