import styles from './styles.module.scss'

export function Background() {
  return (
    <>
      <div className={styles.contentContainer}>
        <video autoPlay loop muted >
          <source src={'videos/background.mp4'}/>
        </video>
      </div>
    </>
  );
}