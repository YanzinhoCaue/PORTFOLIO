import Image from "next/image";
import prisma from '../../../../../public/assets/images/prisma.png'
import styles from './styles.module.scss'

export function CardPrisma() {
  return (
    <div className={styles.cardSkill}>
      <div><Image src={prisma} alt="Logo prisma" height={80} /></div>
      <h4>Prisma</h4>
      <p>Relational Databases, ORM Concepts, Installation and Configuration, Queries and Mutations, Database Migrations, Authentication and Authorization, Integration with Server Technologies, Testing, Best Practices and Performance, Integration with Other Services.</p>
    </div>
  );
}