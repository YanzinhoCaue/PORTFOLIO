import styles from './styles.module.scss';
import { RiWhatsappFill } from 'react-icons/ri';
import { BiLogoDiscordAlt, BiLogoLinkedin, BiLogoGithub, BiLogoTelegram } from 'react-icons/bi';
import Link from 'next/link';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebarContainer}>
        <Link href='https://wa.me/5535999519365' target='_blank'>
          <RiWhatsappFill/>
        </Link>
        <Link href='https://discord.com/channels/@me/1080459945805357138' target='_blank'>
          <BiLogoDiscordAlt/>
        </Link>
        <Link href='https://github.com/YanzinhoCaue' target='_blank'>
          <BiLogoGithub/>
        </Link>
        <Link href='https://linkedin.com/in/yan-cauê-gomes-pereira' target='_blank'>
          <BiLogoLinkedin/>
        </Link>
        <Link href='https://t.me/YanzinhoCaue' target='_blank'>
          <BiLogoTelegram/>
        </Link>
      </aside>
    </>
  )
}