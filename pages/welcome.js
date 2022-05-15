import styles from "../styles/Welcome.module.css";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.buttonsBlock}>
          <button className={styles.headerButton}>О сообществе</button>
          <button className={styles.headerButton}>Программа</button>
        </div>
        <div className={styles.logoBlock}>
          <Image
            src="/sduLogoWhite.png"
            alt="Vercel Logo"
            width={80}
            height={51}
          />
          <Image
            src="/turingLogoWhite.png"
            alt="Vercel Logo"
            width={85}
            height={85}
          />
        </div>
      </header>
      <div className={styles.callToActionContainer}>
        <p className={styles.title}>Full-heart mentorship that works</p>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Hello, Turing! — это менторская программа от старшекурсников для
            младшекурсников
          </p>
          <button className={styles.actionButton}>ДАВАЙ С НАМИ!</button>
        </div>
      </div>
    </div>
  );
}
