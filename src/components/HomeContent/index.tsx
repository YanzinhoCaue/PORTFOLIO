import Image from 'next/image';
import styles from './styles.module.scss'
import me from '../../../public/assets/images/me.png'
import Link from 'next/link';
import { MdOutgoingMail } from 'react-icons/md'

export function HomeContent() {
  return (
      <section className={styles.container}>
        <Image src={me} alt='Photo profile of Yan' width={450}/>
        <div className={styles.textHome}>
          <h1>Hello, visitor!</h1>
          <h2>My name is <span>Yan Cauê</span>!</h2>
          <p>And I'm passionate about technology. This space is where I share my journey and experience as a Full-Stack developer.</p>
          <Link href='mailto:coldecmastercrelan@gmail.com' target='_blank'>
            <span>Enviar E-mail</span>
            <MdOutgoingMail />
          </Link>
        </div>
      </section>
  );
}