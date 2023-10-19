import logo from "../../../public/logo.png"
import Image from "next/image";
import { ActiveLink } from "../ActiveLink/index";
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <span>Home</span>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/about">
            <span>About</span>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/skills">
            <span>Skills</span>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/projects">
            <span>Projects</span>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}